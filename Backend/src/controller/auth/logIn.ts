import { Request,Response,NextFunction } from "express";
import { logInService } from "../../service/auth/logIn";
import cookie from "cookie"

export const logInController = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await logInService(req.body)

        res.cookie("accessToken",result.accessToken),{
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
        }

        res.cookie("refreshToken",result.refreshToken),{
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
        }
        
        res.status(200).json({
            message : "logIn Success",
            accessToken : result.accessToken,
            refreshToken : result.refreshToken
        })
    } catch (error) {
        return next(error)
    }
}