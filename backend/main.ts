import express, { Express, Request, Response } from "express";
import router from "./router";

const app: Express = express();
const port: number = 3000;

app.use("/api/v1", router)

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})
