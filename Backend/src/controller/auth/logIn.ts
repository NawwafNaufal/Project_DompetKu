import { Request,Response,NextFunction } from "express";
import { logInService } from "../../service/auth/logIn";

export const logInController = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await logInService(req.body)
        
        res.status(200).json({
            message : "logIn Success",
            token : result
        })
    } catch (error) {
        return next(error)
    }
}