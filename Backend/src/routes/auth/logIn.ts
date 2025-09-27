import { logInController } from "../../controller/auth/logIn";
import { Router } from "express";
import { validateLogIn } from "../../middleware/validation/validationLogIn";

const route = Router()

route.post('/login',validateLogIn,logInController)

export default route