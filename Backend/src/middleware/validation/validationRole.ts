import { NextFunction,Request,Response } from "express";
import { responseError } from "../../error/responseError";

export const validateRole = (role : string[]) => {
    return (req:Request,res:Response,next:NextFunction) => {
        const getRole = res.locals.user

        if(!getRole) {
            throw new responseError(401,"Token is required")
        }

        if(!role.includes(getRole.role)) {
            throw new responseError(403,"Access not permitted")
        }
        next()
    }
}