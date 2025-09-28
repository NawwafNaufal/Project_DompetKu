import { Request,Response,NextFunction } from "express";
import { logInService } from "../../service/auth/logIn";
import cookiesOptions from "../../../utils/cookies/options";

export const logInController = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await logInService(req.body)

        res.cookie("accessToken",cookiesOptions.accessToken)

        res.cookie("refreshToken",cookiesOptions.refreshToken)
        
        res.status(200).json({
            message : "logIn Success",
            accessToken : result.accessToken,
            refreshToken : result.refreshToken
        })
    } catch (error) {
        return next(error)
    }
}