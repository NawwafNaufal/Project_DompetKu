import { Request,Response,NextFunction } from "express"
import { logOutService } from "../../service/auth/logOut"
import cookiesOptions from "../../../utils/cookies/options";

export const logOutController = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await logOutService(res)
    
        res.clearCookie("accessToken",cookiesOptions.accessToken)
        res.clearCookie("refreshToken",cookiesOptions.refreshToken)
    
        res.status(200).json({
            message : "Logout Success",
            data : result
        })
    } catch (error) {
        return next(error)
    }
}
