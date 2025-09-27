import express from "express"
import dotenv from "dotenv"
import { Request,Response } from "express"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

import signUp from "./routes/auth/signUp"

app.get("/",(req : Request,res : Response) => {
    res.status(200).json({
        message : "Hello World"
    })
})

app.use("/auth",signUp)

import { errorHandling } from "./middleware/errorHandling/error"
app.use(errorHandling)

app.listen(PORT,() => {
    console.log("Server Connect In Port : ", PORT)
})