import { Router } from "express";
import usersController from "./controllers/users/users.controller";
import authController from "./controllers/auth/auth.controller";

const router: Router = Router()

router.get("/users", usersController.GetUsers);
router.get("/users/:userId", authController.ValidAuth, usersController.GetSingleUser);
router.post("/users", usersController.CreateUser);
router.patch("/users/:userId", usersController.UpdateUser);
router.delete("/users/:userId", usersController.DeleteUser);

router.post("/auth/login", authController.Login)

export default router;
