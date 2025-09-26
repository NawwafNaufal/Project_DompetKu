import {PrismaClient,RoleType,User} from "@prisma/client"
import type { signUp } from "../../model/signUp"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export const createUserService = async (data : signUp): Promise<User> => {
    console.log(data)
    const hash = await bcrypt.hash(data.password,10)

    const createUser = await prisma.user.create({
    data : {
        username : data.username,
        email : data.email,
        password : hash,
        dateOfBirth : data.dateOfBirth,
        role : RoleType.User
        
    }})
    console.log(createUser)

    return createUser
}

