import { Router, Request, Response } from "express";

const router: Router = Router()

router.get("/user", (req: Request, res: Response) => {
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
