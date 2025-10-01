enum roleType {
  User = "User",
  Admin = "Admin",
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
