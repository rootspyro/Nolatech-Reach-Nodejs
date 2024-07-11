import { Request, Response } from "express";
import { UserItem } from "./users.pipes";
import UserModel from "../../db/models/user.model";

async function GetUsers(req: Request, res: Response) {
  let items: UserItem[] = [] 

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
    })
  }
}

export {
  GetUsers,
}
