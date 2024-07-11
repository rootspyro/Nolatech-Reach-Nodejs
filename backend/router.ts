import { Router, Request, Response } from "express";
import { NewUserBody } from "./pipes";
import { GetUsers, CreateUser } from "./handlers";

const router: Router = Router()

router.get("/users", async (req: Request, res: Response) => {

  const data = await GetUsers();

  const response: ApiResponse = {
    success: true,
    data: data
  }

  res.json(response);
})

router.post("/users", async(req: Request, res: Response) => {
  const body: NewUserBody = req.body;

  const data = await CreateUser(body);

  const response: ApiResponse = {
    success: true,
    data: data
  }

  res.json(response);
})

interface ApiResponse {
  success: boolean;
  data: any;
}
export default router;
