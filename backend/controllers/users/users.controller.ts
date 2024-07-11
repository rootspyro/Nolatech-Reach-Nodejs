import { Request, Response} from "express";
import { UserItem, NewUserBody } from "./users.pipes";
import UserModel from "../../db/models/user.model";
import { Op } from "sequelize";

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

    // create user
    const newUserData = await UserModel.create({
      username: body.username,
      email: body.email,
      password: body.password
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

export {
  GetUsers,
  CreateUser,
}
