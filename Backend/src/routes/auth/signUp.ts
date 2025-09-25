import { Router } from "express";
import { createUserController } from "../../controller/auth/signUp";
import { validationSignUp } from "../../middleware/validation/validationSignUp";

const route = Router()

route.post("/sign-up",validationSignUp,createUserController)