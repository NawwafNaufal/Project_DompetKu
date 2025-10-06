import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";

import { errorHandling } from "./middleware/errorHandling/error";

dotenv.config();

const app = express()
const PORT = process.env.PORT

app.use(express.json())

import signUp from "./routes/auth/signUp"
import logIn from "./routes/auth/logIn"
import logOut from "./routes/auth/logOut"
import getData from "./routes/admin/getUsers"

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser())


app.use("/",getData)

app.use("/auth", signUp);
app.use("/auth", logIn);
app.use("/auth", logOut);

app.use(errorHandling);

app.listen(PORT, () => {
  console.log("Server Connect In Port : ", PORT);
});
