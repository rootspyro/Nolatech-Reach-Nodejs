import express, { Express } from "express";
import router from "./router";
import sequelize from "./db/conn";
import dotenv from "dotenv";
// import swaggerUI from "swagger-ui-express";

dotenv.config()

const app: Express = express();
const port = process.env.PORT;

(async () => {
  await sequelize.sync();
})();

app.use(express.json())
app.use("/api/v1", router);
// app.use("/api/docs", swaggerUI.serve);
// app.get("/api/docs", swaggerUI.setup());

app.listen(port, () => {
  console.log(`server listening on port :${port}`);
});
