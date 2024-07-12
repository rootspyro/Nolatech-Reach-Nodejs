interface LoginBody {
  user: string;
  password: string;
}

interface TokenPayload {
  id: number;
  user: string;
  email: string;
  exp: number;
}

export type {
  LoginBody,
  TokenPayload,
}
