import redis from "../../config/redis"

export const featureFlag = async (flagname : string): Promise<boolean> => {
    const flagValue = await redis.get(`feature:${flagname}`)
    return flagValue === "true"
}