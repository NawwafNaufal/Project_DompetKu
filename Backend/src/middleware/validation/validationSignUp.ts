import { schemaSignUp } from "../../validation/schemaSignUp";
import { NextFunction, Request,Response } from "express";
import { customRequest } from "../../model/signUp";

export const validationSignUp = (req:customRequest,res:Response,next:NextFunction) => {
    const {error,value} = schemaSignUp.validate(req.body)

    if(error){
        return next(error)
    }

    req.validationSignUp = value

    return next()
}