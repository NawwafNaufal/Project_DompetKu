import Redis from "ioredis"

const redis = new Redis({
    host : "127.0.0.1",
    port : 6379,
    db : 0
})

redis.on("connect",() => {
    console.log("Connected to redis")
})

redis.on("error",(err) => {
    console.log("Redis Error",err)
})

export default redis