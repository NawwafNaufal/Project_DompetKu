import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken"
import { responseError } from "../../error/responseError"
import env from "dotenv"

env.config()

export const validateJwt = async (req:Request,res:Response,next:NextFunction) => {
    const getToken = req.cookies.accessToken

    if(!getToken) throw new responseError(401,"Token is required")

        const decode = jwt.verify(getToken,process.env.JWT_SECRET as string)

    res.locals.user = decode
    next()
}