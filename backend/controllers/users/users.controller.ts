import { Request, Response} from "express";
import { UserItem, NewUserBody, UserWithPassword } from "./users.pipes";
import UserModel from "../../db/models/user.model";
import { Op } from "sequelize";
import { hash } from "bcrypt";

const salt = 10;

async function GetUsers(req: Request, res: Response) {
  let items: UserItem[] = [];

  const queries = req.query;

  try {

    // set default filters
    let limit: number = 10;
    let offset: number = 0;

    if (queries?.count) {
      const count: string = queries?.count.toString();
      const parsedCount: number = parseInt(count); 

      if (!parsedCount) {
        res.status(400).json({
          success: false,
          error: "count value must be an integer"
        })
        return
      }

      if (parsedCount < 1) {
        res.status(400).json({
          success: false,
          error: "count value must be an higher than 0"
        })
        return
      }

      limit = parsedCount;

    }

    if (queries?.page) {
      const page: string = queries?.page.toString();
      const parsedPage: number = parseInt(page);

      if (!parsedPage) {
        res.status(400).json({
          success: false,
          error: "page value must be an integer"
        })
        return
      }

      if (parsedPage < 1) {
        res.status(400).json({
          success: false,
          error: "page value must be higher than 0"
        })
        return
      }

      offset = limit * (parsedPage - 1);
    }

    const userResponse = await UserModel.findAll({
      limit: limit,
      offset: offset
    });

    userResponse.map(user => {
      const data = user.dataValues; 

      items.push({
        id: data.id,
        username: data.username,
        email: data.email,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      })
    })

    const data = {
      itemsFound: items.length,
      items
    }

    res.json({
      success: true,
      data: data 
    })
  } catch(err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });
  }
}

async function CreateUser(req: Request, res: Response) {

  const body: NewUserBody = req.body;

  // validate body
  if (!body.username) {
    res.status(400).json({
      success: false,
      error: "username is required in request body"
    })
    return
  }

  if (!body.email) {
    res.status(400).json({
      success: false,
      error: "email field is required in request body"
    });
    return
  }

  if (!body.password) {
    res.status(400).json({
      success: false,
      error: "password is required in request body"
    });
    return
  }

  if (body.username.length < 3) {
    res.status(400).json({
      success: false,
      error: "username length must be greater than 2",
    });
    return
  }

  if (!validatePassword(body.password)) {
    res.status(400).json({
      success: false,
      error: "invalid password",
      passwordRequirements: [
        "minium length: 8",
        "uppercase",
        "lowercase",
        "one symbol"
      ]
    });
    return
  }

  if (!validateEmail(body.email)) {
    res.status(400).json({
      success: false,
      error: "invalid email format",
    });
    return
  }

  // validate if user exist already
  try {
    const userExists = await UserModel.findOne({
      where: {
        [Op.or]: [{username: body.username}, {email: body.email}]
      }
    });

    if (userExists != null) {
      res.status(409).json({
        success: false,
        error: "user already exist"
      });
      return 
    }

    // hash password
    const passwordHashed = await hash(body.password, salt)

    // create user
    const newUserData = await UserModel.create({
      username: body.username,
      email: body.email,
      password: passwordHashed
    });

    const data = newUserData.dataValues;

    let newUser: UserWithPassword = {
      id: data.id,
      username: data.username,
      email: data.email,
      passwordHash: data.password,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    };

    res.status(201).json({
      success: true,
      data: newUser
    });

    return

  } catch(err) {

    console.log(err);
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });

  }
}

async function GetSingleUser(req: Request, res: Response) {
  const userId: string = req.param("userId");
  const parsedId: number = parseInt(userId);

  if (!parsedId) {
    res.status(400).json({
      success: false,
      error: "user id must be an integer number"
    });
    return
  }

  try {

    const userData = await UserModel.findOne({
      where: {
        id: parsedId
      }
    })

    if ( userData == null ) {
      res.status(404).json({
        success: false,
        error: "user not found"
      });
      return
    }

    const data = userData.dataValues;

    let response: UserItem = {
      id: data.id,
      username: data.username,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    };

    res.status(200).json({
      success: true,
      data: response
    })

  } catch(err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });
  }
}

async function UpdateUser(req: Request, res: Response) {
  const body: NewUserBody = req.body;
  
  const userId: string = req.param("userId");
  const parsedId: number = parseInt(userId);

  if (!parsedId) {
    res.status(400).json({
      success: false,
      error: "user id must be an integer number"
    });
    return
  }

  try {
    // validate if user exist before updated it
    const user = await UserModel.findOne({
      where: {
        id: parsedId
      }
    });

    if (user == null) {
      res.status(404).json({
        success: false,
        error: "user not found"
      });
      return
    }

    const userData = user.dataValues;

    // build update data
    if (!body.username) {
      body.username = userData.username; 
    } else {

      // validate username length
      if (body.username.length < 3) {
        res.status(400).json({
          success: false,
          error: "username length must be greater than 2",
        });
        return
      }

      // validate that username is not taken already
      const count = await UserModel.count({
        where: {
          [Op.and]: [
            {
              username: body.username
            },
            {
              id: {
                [Op.or]: [
                  {[Op.gt]: userId},
                  {[Op.lt]: userId}
                ]
              }
            }
          ]
        }
      });

      if (count > 0) {
        res.status(409).json({
          success: false,
          error: "username already taken"
        });
        return
      }
    }

    if (!body.email) {
      body.email = userData.email;
    } else {
      // validate email format
      if (!validateEmail(body.email)) {
        res.status(400).json({
          success: false,
          error: "invalid email format",
        });
        return
      }

      // validate that email is not taken already
      const count = await UserModel.count({
        where: {
          [Op.and]: [
            {
              email: body.email
            },
            {
              id: {
                [Op.or]: [
                  {[Op.gt]: userId},
                  {[Op.lt]: userId}
                ]
              }
            }
          ]
        }
      });

      if (count > 0) {
        res.status(409).json({
          success: false,
          error: "email already taken"
        });
        return
      }
    }

    // hash new password if exists
    if (body.password) {
      // validate password
      if(!validatePassword(body.password)) {
        res.status(400).json({
          success: false,
          error: "invalid password",
          passwordRequirements: [
            "minium length: 8",
            "uppercase",
            "lowercase",
            "one symbol"
          ]
        });
        return
      }

      // password is valid -> hash new password
      const hashedPassword = await hash(body.password, salt);
      body.password = hashedPassword;
    }

    const updatedUser = await UserModel.update(body, {
      where: {
        id: parsedId
      }
    });

    // update the data
    if (updatedUser == null) {
      res.status(404).json({
        success: false,
        error: "user not found"
      });
      return
    }

    if (!updatedUser[0]) {
      res.status(500).json({
        success: false,
        error: "error from the data layer"
      });
    }

    // get new data
    const userNewData = await UserModel.findOne({
      where: {
        id: parsedId
      }
    });

    if (user == null) {
      res.status(404).json({
        success: false,
        error: "user not found"
      });
      return
    }

    const response: UserWithPassword = {
      id: userNewData?.dataValues.id,
      username: userNewData?.dataValues.username,
      email: userNewData?.dataValues.email,
      passwordHash: userNewData?.dataValues.password,
      createdAt: userNewData?.dataValues.createdAt,
      updatedAt: userNewData?.dataValues.updatedAt,
    }

    res.status(200).json({
      success: true,
      data: response
    });

  } catch(err) {

    // Something went wrong in the process 
    console.log(err)
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });
  }
}

async function DeleteUser(req: Request, res: Response) {
  const userId: string = req.param("userId");
  const parsedId: number = parseInt(userId);

  if (!parsedId) {
    res.status(400).json({
      success: false,
      error: "user id must be an integer number"
    });
    return
  }

  try {

    const deletedUser = await UserModel.destroy({
      where: {
        id: parsedId
      }
    });

    if (!deletedUser) {
      res.status(404).json({
        success: false,
        error: "user not found"
      });
      return
    }

    res.status(200).json({
      success: true,
      data: "user successfully deleted"
    });

  } catch(err) {

    console.log(err)
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });
  }
}

function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const usersController = {
  GetUsers,
  GetSingleUser,
  CreateUser,
  UpdateUser,
  DeleteUser
}

export default usersController;
