import { Router, Request, Response } from "express";
// import UserModel from "./db/models/user.model";

const router: Router = Router()

router.get("/user", async (req: Request, res: Response) => {

  const data: UserItem[] = [
    {
      id: 1,
      username: "spyro",
      email: "example@gmail.com"
    }
  ];

  const response: ApiResponse = {
    success: true,
    data: data
  }

  res.json(response)
})

interface ApiResponse {
  success: boolean;
  data: any;
}

interface UserItem {
  id: number;
  username: string;
  email: string;
}

export default router;
