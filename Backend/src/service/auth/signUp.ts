import { PrismaClient, RoleType, User } from "@prisma/client";
import type { signUp } from "../../model/auth";
import bcrypt from "bcrypt";
import { responseError } from "../../error/responseError";

const prisma = new PrismaClient();

export const createUserService = async (data: signUp): Promise<User> => {
  const hash = await bcrypt.hash(data.password, 10);

  const getEmailUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  const getUsernameUser = await prisma.user.findUnique({
    where: { username: data.username },
  });

  if (getEmailUser) {
    throw new responseError(400, "Email already exist");
  }
  if (getUsernameUser) {
    throw new responseError(400, "Username already exist");
  }

  const createUser = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hash,
      dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
      role: RoleType.User,
    },
  });

  return createUser;
};
