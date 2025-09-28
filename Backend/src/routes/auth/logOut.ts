import { Router } from "express";
import { logOutController } from "../../controller/auth/logOut";
import { validateJwt } from "../../middleware/validation/validationJwt";

const route = Router()

route.post("/logout",validateJwt,logOutController)

export default route