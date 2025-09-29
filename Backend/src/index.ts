import express from "express"
import dotenv from "dotenv"
import { Request,Response } from "express"
import { validateJwt } from "./middleware/validation/validationJwt"
import cookieParser from "cookie-parser"
import { validateRole } from "./middleware/validation/validationRole"
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

import signUp from "./routes/auth/signUp"
import logIn from "./routes/auth/logIn"
import logOut from "./routes/auth/logOut"

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));


app.get("/",validateJwt,validateRole(["Admin"]),(req : Request,res : Response) => {
    res.status(200).json({
        message : "Hello World"
    })
})

app.use("/auth",signUp)
app.use("/auth",logIn)
app.use("/auth",logOut)

import { errorHandling } from "./middleware/errorHandling/error"
app.use(errorHandling)

app.listen(PORT,() => {
    console.log("Server Connect In Port : ", PORT)
})