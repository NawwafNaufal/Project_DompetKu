import { logInController } from "../../controller/auth/logIn";
import { Router } from "express";

const route = Router()

route.post('/login',logInController)

export default route