import { Request, Response} from "express";
import { UserItem, NewUserBody } from "./users.pipes";
import UserModel from "../../db/models/user.model";
import { Op } from "sequelize";
import { hash } from "bcrypt";

async function GetUsers(req: Request, res: Response) {
  let items: UserItem[] = [];

  try {

    const userResponse = await UserModel.findAll();
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
    })
    return
  }

  if (!body.password) {
    res.status(400).json({
      success: false,
      error: "password is required in request body"
    })
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
    })
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
    const passwordHashed = await hash(body.password, 10)

    // create user
    const newUserData = await UserModel.create({
      username: body.username,
      email: body.email,
      password: passwordHashed
    });

    const data = newUserData.dataValues;

    let newUser: UserItem = {
      id: data.id,
      username: data.username,
      email: data.email,
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
      res.json({
        success: false,
        error: "user not found"
      })
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

function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(password);
}

const usersController = {
  GetUsers,
  GetSingleUser,
  CreateUser,
}

export default usersController;
