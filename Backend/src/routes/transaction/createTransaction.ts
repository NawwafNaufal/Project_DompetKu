import { Router } from "express";
import { createTransactionController } from "../../controller/transaction/addTransaction";
import { validateJwt } from "../../middleware/validation/validationJwt";

const route = Router()

route.post("/add-transaction",validateJwt,createTransactionController)

export default route