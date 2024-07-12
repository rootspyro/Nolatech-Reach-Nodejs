import { NextFunction, Request, Response } from "express";
import { LoginBody, TokenPayload } from "./auth.pipes";
import UserModel from "../../db/models/user.model";
import { Op } from "sequelize";
import { compare} from "bcrypt";
import { configDotenv } from "dotenv";
import { sign, verify } from "jsonwebtoken";

configDotenv();

async function Login(req: Request, res: Response) {

  const body: LoginBody = req.body;

  // validate body
  if (!body.user) {
    res.status(400).json({
      success: false,
      error: "body user is required"
    })
    return
  }

  if (!body.password) {
    res.status(400).json({
      success: false,
      error: "body password is required"
    });
    return
  }

  try {

    // validate if user exists
    const user = await UserModel.findOne({
      where: {
        [Op.or]: [{username: body.user}, {email: body.user}]
      }
    });

    if (user == null) {
      res.status(401).json({
        success: false,
        error: "invalid user or password"
      });
      return
    }

    // validate password match for login
    const userData = user.dataValues;
    const passwordMatch: boolean = await compare(body.password, userData.password);

    if (!passwordMatch) {
      res.status(401).json({
        success: false,
        error: "invalid user or password"
      });
      return
    }

    // validate secret is defined
    const secret: string | undefined = process.env.SECRET;
    if (secret == undefined) {
      console.error("SECRET KEY MISSED");
      res.json({
        success: false,
        error: "error from the data layer"
      });
      return 
    }

    // generate token once user is authenticated

    const payload: TokenPayload = {
      id: userData.id,
      user: userData.username,
      email: userData.email,
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }

    const token = sign(payload, secret.toString());

    res.json({
      success: true,
      data: {
        token: token,
        meta: payload
      } 
    });

  } catch(err) {

    console.error(err);
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });
  }

}

async function ValidAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("Authorization");
  if( header == undefined ) {
    res.status(401).json({
      success: false,
      error: "Authorization Header missed"
    });
    return
  }

  // get token

  const headerParts = header.split(" ");
  let token: string = "";

  // Authorization: Bearer token....
  if (headerParts.length > 1) {
    token = headerParts[1];

  } else {  // Authorization: token...
    token = headerParts[0];
  }

  // validate secret is defined
  const secret: string | undefined = process.env.SECRET;
  if (secret == undefined) {
    console.error("SECRET KEY MISSED");
    res.status(500).json({
      success: false,
      error: "error from the data layer"
    });
    return 
  }

  // verify token
  try {

    const decoded = verify(token, secret);
    if (decoded) {
      next();
    } else {

      res.status(401).json({
        success: false,
        error: "unauthorized"
      });
      return
    }

  } catch {
    res.status(401).json({
      success: false,
      error: "unauthorized"
    });
  }

} 

const authController = {
  Login,
  ValidAuth,
}

export default authController;
