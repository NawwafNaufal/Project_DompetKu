import redis from "../../../config/redis";
import { PrismaClient } from "@prisma/client";

export const getUsersService = async (userId : string, take : number, page : number) => {

    const skip = (page -1) * take

    const prisma = new PrismaClient()
        const cacheKey = `transactions:${userId}-page:${page}-take:${take}`
        
            const getFromRedis = await redis.get(cacheKey)
            if(getFromRedis){
                const parse = JSON.parse(getFromRedis as string)
                return {data : parse , source : "Cache",total: parse.totalData}
            }

            const getFromDb = await prisma.transaction.findMany({
                where : {
                    userId : userId as string
                },
                skip : skip,
                take : take
            })

            const totalData = await prisma.transaction.count()
        
            await redis.setex(cacheKey, 3600, JSON.stringify({getFromDb,totalData}));

            return {data : getFromDb , source : "Db",total : totalData}
}

