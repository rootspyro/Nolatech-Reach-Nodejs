import { Sequelize } from "sequelize";
import {config} from "dotenv";

config();

let db: string = "";
let user: string = "";
let pass: string = "";

if (process.env.DB_NAME !== undefined) {
  db = process.env.DB_NAME;
}

if (process.env.DB_USER !== undefined) {
  user = process.env.DB_USER;
}

if (process.env.DB_PASSWORD !== undefined) {
  pass = process.env.DB_PASSWORD;
}

const sequelize = new Sequelize(
  db,
  user,
  pass,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
);

export default sequelize;
