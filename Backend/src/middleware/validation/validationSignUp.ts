import { schemaSignUp } from "../../validation/schemaSignUp";
import { NextFunction, Request,Response } from "express";
import { ObjectSchema } from "joi";

export const validationSignUp = (schema : ObjectSchema) => {
    return (req : Request, res : Response , next : NextFunction) => {
        console.log(schema)
        console.log(req)
        const {error,value} = schema.validate(req.body)
    
        if(error){
            return next(error)
        }
    
        req.body = value
        next()
    }
}   