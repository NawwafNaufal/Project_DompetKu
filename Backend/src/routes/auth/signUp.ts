import { Router } from "express";
import { createUserController } from "../../controller/auth/signUp";
import { validationSignUp } from "../../middleware/validation/validationSignUp";
import { schemaSignUp } from "../../validation/schemaSignUp";

const route = Router()

route.post("/sign-up",validationSignUp,createUserController)

export default route
