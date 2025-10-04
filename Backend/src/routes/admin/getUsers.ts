import { Router } from "express";
import { validateJwt } from "../../middleware/validation/validationJwt"
import { validateRole } from "../../middleware/validation/validationRole"
import {getDataController} from "../../controller/admin/getDataTransaction"

const route = Router()

route.get("/get-data-users",validateJwt,validateRole(['User']),getDataController)

export default route