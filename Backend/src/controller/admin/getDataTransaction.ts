import { Request,Response,NextFunction } from "express";
import {getUsersService} from "../../service/admin/dataUsers"

export const getDataController = async (req:Request,res:Response,next:NextFunction) => {

    const userId = res.locals.user

    try {        
        const result = await getUsersService (userId.id)
            return res.status(200).json({
                data : result.data,
                source : result.source
            })
        
    } catch (error) {
        return next(error)
    }
}