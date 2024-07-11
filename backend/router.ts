import { Router } from "express";
import { GetUsers } from "./controllers/users/users.controller";

const router: Router = Router()

router.get("/users", GetUsers)
//
// router.post("/users", async(req: Request, res: Response) => {
//   const body: NewUserBody = req.body;
//
//   const data = await CreateUser(body);
//
//   const response: ApiResponse = {
//     success: true,
//     data: data
//   }
//
//   res.json(response);
// })
//
// interface ApiResponse {
//   success: boolean;
//   data: any;
// }
export default router;
