import { Request,Response,NextFunction } from "express";
import {getUsersService} from "../../service/admin/dataUsers"

export const getDataController = async (req:Request,res:Response,next:NextFunction) => {

    const userId = res.locals.user
    const take = Number(req.query.data) 
    const page = Number(req.query.page) || 1

    try {        
        const result = await getUsersService (userId.id,take,page)
            return res.status(200).json({
                take,
                page,
                totalPage : Math.ceil(Number(result.total) / take),
                totalData : result.total,
                data : result.data,
                source : result.source
            })
        
    } catch (error) {
        return next(error)
    }
}