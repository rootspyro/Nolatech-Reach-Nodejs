interface NewUserBody {
  username: string;
  email: string;
  password: string;
}

interface UserItem {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface UserWithPassword {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
}

export type {
  NewUserBody,
  UserItem,
  UserWithPassword,
}
