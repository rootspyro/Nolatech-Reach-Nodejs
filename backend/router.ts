import { Router } from "express";
import usersController from "./controllers/users/users.controller";
import authController from "./controllers/auth/auth.controller";
import { Request, Response } from "express";

const router: Router = Router()

// Unprotected endpoints
router.post("/users", usersController.CreateUser);
router.post("/auth/login", authController.Login)

// Protected endpoints (Authorization header required)
router.get("/users", authController.ValidAuth, usersController.GetUsers);
router.get("/users/:userId", authController.ValidAuth, usersController.GetSingleUser);
router.patch("/users/:userId", authController.ValidAuth, usersController.UpdateUser);
router.delete("/users/:userId", authController.ValidAuth, usersController.DeleteUser);

// api message 404 NOT FOUND
router.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "path not found"
  })
});


export default router;
