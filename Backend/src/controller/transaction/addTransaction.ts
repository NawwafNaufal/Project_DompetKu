import { Response,Request,NextFunction } from "express";
import { transaction } from "../../model/auth";
import { createTransactionService } from "../../service/transaction/createTransaction";

export const createTransactionController = async (req : Request, res : Response, next : NextFunction) => {
    const getIdUser = res.locals.user
    const data = req.body as transaction

    try {
        const result = await createTransactionService(data,getIdUser.id)
        
        res.status(201).json({
            message : "Add data success",
            data : result
        })
    } catch (error) {
        return next(error)
    }
}