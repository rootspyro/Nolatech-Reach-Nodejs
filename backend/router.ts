import { NextFunction, Router, Request, Response } from "express";
import usersController from "./controllers/users/users.controller";
import authController from "./controllers/auth/auth.controller";

const router: Router = Router()

router.use((req: Request, res: Response, next: NextFunction) => {
  const path: string = req.path;
  const method: string = req.method;
  const date = new Date();
  console.log(`${date.getFullYear()}:${date.getMonth()}:${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()} - ${method}:/api/v1${path}`);
  next();
})

// Unprotected endpoints
router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: "server is up"
  })
})

router.post("/users", usersController.CreateUser);
router.post("/auth/login", authController.Login);

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
