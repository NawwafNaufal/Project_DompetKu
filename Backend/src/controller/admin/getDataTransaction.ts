import { Request,Response,NextFunction } from "express";
import redis from "../../../config/redis";
import { PrismaClient } from "@prisma/client";

export const getDataController = async (req:Request,res:Response,next:NextFunction) => {

    const userId = req.query.id as string
    try {

        const prisma = new PrismaClient()
        const cacheKey = userId ? `transactions:${userId}` : "transactions:all";
        
            const getRedis = await redis.get(cacheKey)
        
            if(getRedis) {
                return res.status(200).json({
                    data : JSON.parse(getRedis),
                    source : "Cache"
                })
            }
        
            const result = await prisma.transaction.findMany({
                where : {
                    userId : userId as string
                }
            })
        
            await redis.setex(cacheKey, 3600, JSON.stringify(result));
        
            return res.status(200).json({
                data : getRedis,
                source : "Db"
            })
        
    } catch (error) {
        return next(error)
    }
}