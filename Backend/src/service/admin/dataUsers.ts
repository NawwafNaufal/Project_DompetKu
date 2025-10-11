import redis from "../../../config/redis";
import prisma from "../../../config/prismaClient";
import { dataUser } from "../../model/auth";

export const getUsersService = async (userId : string, take : number, page : number): Promise<dataUser> => {

    const skip = (page -1) * take

        const versionKey = `transaction:${userId}:version`
        let version = await redis.get(versionKey)
        if(!version){
            version = "1"
            await redis.set(versionKey,version)
        }

        const cacheKey = `transactions:${userId}:v${version}-page:${page}-take:${take}`;
        
            const getFromRedis = await redis.get(cacheKey)
            if(getFromRedis){
                const parse = JSON.parse(getFromRedis as string)
                return {data : parse , source : "Cache",total: parse.totalData}
            }

            const [getFromDb,totalData] = await Promise.all([
                prisma.transaction.findMany({
                    where : {
                        userId : userId as string
                    },
                    skip : skip,
                    take : take
                }),
    
                prisma.transaction.count({
                    where: {
                        userId : userId
                    }
                })
            ])
        
            await redis.setex(cacheKey, 320, JSON.stringify({getFromDb,totalData}));

            return {data : getFromDb , source : "Db",total : totalData}
}

