import redis from "../../../config/redis";
import { PrismaClient } from "@prisma/client";

export const getUsersService = async (userId : string) => {
    console.log(userId)
    const prisma = new PrismaClient()
        const cacheKey = userId ? `transactions:${userId}` : "transactions:all";
        
            const getFromRedis = await redis.get(cacheKey)
            if(getFromRedis){
                 const parse = JSON.parse(getFromRedis as string)
                 return {data : parse , source : "cache"}
            }

            const getFromDb = await prisma.transaction.findMany({
                where : {
                    userId : userId as string
                }
            })
        
            await redis.setex(cacheKey, 3600, JSON.stringify(getFromDb));

            return {data : getFromDb , source : "db"}
}

