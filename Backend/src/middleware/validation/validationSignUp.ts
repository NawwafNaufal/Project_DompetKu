import { schemaSignUp } from "../../validation/schemaSignUp";
import { NextFunction, Request,Response } from "express";

export const validationSignUp = (req : Request, res : Response , next : NextFunction) => {
        const {error,value} = schemaSignUp.validate(req.body)
    
        if(error){
            return next(error)
        }
    
        req.body = value
        return next()
}