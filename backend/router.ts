import { Router } from "express";
import { GetUsers, CreateUser } from "./controllers/users/users.controller";

const router: Router = Router()

router.get("/users", GetUsers);
router.post("/users", CreateUser);

export default router;
