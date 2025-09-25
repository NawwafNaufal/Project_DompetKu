import {PrismaClient,User} from "@prisma/client"
import type { signUp } from "../../model/signUp"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export const createUserService = async (data : signUp): Promise<User> => {
    data.password = await bcrypt.hash(data.password,10)

    const createUser = await prisma.user.create({data})

    return createUser
}

