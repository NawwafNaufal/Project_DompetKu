import { NextFunction,Request,Response } from "express";
import { responseError } from "../../error/responseError";
import { ValidationError } from "joi";

export const errorHandling = (err:any,req:Request,res:Response,next:NextFunction) => {
    if(!err){
        next()
        return
    }
    if(err instanceof responseError){
        return res.status(err.status).json({
            errors : err.message
        })
    }
    if(err instanceof ValidationError){
        return res.status(400).json({
            errors : err.message
        })
    }
    else {
        return res.status(500).json({
            message : "Server internal error"
        })
    }
}
