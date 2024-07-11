import express, { Express } from "express";
import router from "./router";
import sequelize from "./db/conn";
import dotenv from "dotenv";

dotenv.config()

const app: Express = express();
const port = process.env.PORT;

// test connection
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully");

} catch(err) {
  console.error("Unable to connect to database: ", err);
}

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
