import { PrismaClient } from "@prisma/client";
import { responseError } from "../../error/responseError";
import type { LogIn } from "../../model/auth";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"

const prisma = new PrismaClient()
dotenv.config()

export const logInService = async (data : LogIn) => {

    let dataLogin : string

        if ("username" in data){
            dataLogin = data.username
        }else{
            dataLogin = data.email
        }
    
        const getUser = await prisma.user.findFirst({
            where : {
                OR : [
                    {email : dataLogin},
                    {username : dataLogin}
                ]
            }
        })

        if(!getUser) throw new responseError(400,"User not found,please register")

        const jwtKey = process.env.JWT_SECRET as string

        const validatePassword = await bcrypt.compare(data.password,getUser.password)

        if(!validatePassword) throw new responseError(400,"Wrong Password")

        const payload = {
            email : dataLogin,
            username : dataLogin,
            dateOfBirth : getUser.dateOfBirth,
            role : getUser.role
        }

        const token = jwt.sign(payload,jwtKey,{expiresIn : '1h'})

        return token 

}