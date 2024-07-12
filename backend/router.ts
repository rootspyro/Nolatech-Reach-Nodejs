import { Router } from "express";
import usersController from "./controllers/users/users.controller";

const router: Router = Router()

router.get("/users", usersController.GetUsers);
router.get("/users/:userId", usersController.GetSingleUser)
router.post("/users", usersController.CreateUser);

export default router;
