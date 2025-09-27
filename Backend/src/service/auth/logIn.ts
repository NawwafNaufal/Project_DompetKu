import { PrismaClient } from "@prisma/client";
import { responseError } from "../../error/responseError";
import type { LogIn,refreshToken } from "../../model/auth";
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
        const accessToken = jwt.sign(payload,jwtKey,{expiresIn : '1h'})
        const refreshToken = jwt.sign({username : payload.username},jwtKey,{expiresIn : '30d'})
        
        const refToken : refreshToken = {
            userId : getUser.id, 
            token : refreshToken,
            expiredAt : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }

        prisma.refreshToken.create({
                data: refToken
        })

        return {accessToken,refreshToken}

}