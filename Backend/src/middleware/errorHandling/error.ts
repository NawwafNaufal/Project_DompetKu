import { NextFunction,Request,Response } from "express";
import { responseError } from "../../error/responseError";
import { ValidationError } from "joi";

export const errorHandling = (err:any,req:Request,res:Response,next:NextFunction) => {
    if(!err){
        next()
        return
    }
    if(err instanceof responseError){
        console.log(err.message,err.stack)
        return res.status(err.status).json({
            errors : err.message
        })
    }
    if(err instanceof ValidationError){
        console.log(err.message,err.stack)
        return res.status(400).json({
            errors : err.message
        })
    }
    else {
        console.log(err.message,err.stack)
        return res.status(500).json({
            message : "Server internal error"
        })
    }
}
