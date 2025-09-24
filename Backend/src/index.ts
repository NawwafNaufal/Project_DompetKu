import express from "express"
import dotenv from "dotenv"
import { Request,Response } from "express"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get("/",(req : Request,res : Response) => {
    res.status(200).json({
        message : "Hello World"
    })
})

app.listen(PORT,() => {
    console.log("Server Connect In Port : ", PORT)
})