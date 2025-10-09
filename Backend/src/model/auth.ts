import { Transaction } from "@prisma/client";

enum roleType {
  User = "User",
  Admin = "Admin",
}

enum typeTransaction {
    Income = "Income",
    Expense = "Expense"
}

export interface signUp {
  username: string;
  email: string;
  password: string;
  dateOfBirth?: Date;
  role: roleType.User;
}

export interface logInWithUsername {
  username: string;
  password: string;
}

export interface logInWithEmail {
  email: string;
  password: string;
}

export type LogIn = logInWithUsername | logInWithEmail;

export interface refreshToken {
  userId: string;
  token: string;
  expiredAt: Date;
}

export interface transaction {
  type : typeTransaction,
  amount : number
  description : string
}

export interface dataUser {
  data : Transaction[] , 
  source : "Cache" | "Db",
  total: number
}
