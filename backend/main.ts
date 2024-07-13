import * as express from "express";
import router from "./router";
import sequelize from "./db/conn";
import {config} from "dotenv";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import * as cors from "cors";

config();

const app: express.Express = express();
const port = process.env.PORT;

(async () => {
  await sequelize.sync();
})();

app.use(cors({
  origin: "*",
  methods: "GET,POST,PATCH,DELETE"
}))
app.use(express.json());
app.use("/api/v1", router);
app.use("/api/docs", swaggerUI.serve);
app.get("/api/docs", swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`server listening on port :${port}`);
});
