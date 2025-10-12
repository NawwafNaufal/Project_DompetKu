import { Request,Response,NextFunction } from "express";
import { schemaLogIn } from "../../validation/schemaLogIn";

export const validateLogIn = (req:Request,res:Response,next:NextFunction) => {
    const {error,value} = schemaLogIn.validate(req.body)

    if(error){
        return next(error)
    }

    req.body = value
    return next()
}