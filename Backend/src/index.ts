import express from "express"
import dotenv from "dotenv"
import { Request,Response } from "express"
import { validateJwt } from "./middleware/validation/validationJwt"
import cookieParser from "cookie-parser"
import { validateRole } from "./middleware/validation/validationRole"
import { getDataController } from "./controller/admin/getDataTransaction"
import cors from "cors"
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { validateJwt } from "./middleware/validation/validationJwt";
import { validateRole } from "./middleware/validation/validationRole";
import { errorHandling } from "./middleware/errorHandling/error";

import signUp from "./routes/auth/signUp";
import logIn from "./routes/auth/logIn";
import logOut from "./routes/auth/logOut";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.get("/getData",getDataController)


app.get("/",validateJwt,validateRole(["Admin"]),(req : Request,res : Response) => {
=======
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", signUp);
app.use("/auth", logIn);
app.use("/auth", logOut);

// Protected route example
app.get(
  "/",
  validateJwt,
  validateRole(["Admin"]),
  (req: Request, res: Response) => {
    res.status(200).json({
      message: "Hello World",
    });
  }
);

// Error handling middleware
app.use(errorHandling);

// Start server
app.listen(PORT, () => {
  console.log("Server Connect In Port : ", PORT);
});
