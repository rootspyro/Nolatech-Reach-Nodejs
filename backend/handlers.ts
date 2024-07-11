import UserModel from "./db/models/user.model";
import { NewUserBody, UserItem } from "./pipes";

async function GetUsers(): Promise<UserItem[]> {

  let items: UserItem[] = [];

  const usersResponse = await UserModel.findAll();
  usersResponse.map(user => {
    const data = {
      id: user.dataValues.id,
      username: user.dataValues.username,
      email: user.dataValues.email,
      createdAt: user.dataValues.createdAt,
      updatedAt: user.dataValues.updatedAt
    }

    items.push(data)
  })

  return items;
}

async function CreateUser(body: NewUserBody): Promise<UserItem> {

  const newUser = await UserModel.create({
    username: body.username,
    email: body.email,
    password: body.password
  });

  const user: UserItem = {
    id: newUser.dataValues.id,
    username: newUser.dataValues.username,
    email: newUser.dataValues.email,
    createdAt: newUser.dataValues.createdAt,
    updatedAt: newUser.dataValues.updatedAt
  }

  return user;
  
}


export {
  GetUsers,
  CreateUser, 
}
