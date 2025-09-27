import { signUp } from "../../model/auth";
import { createUserService } from "../../service/auth/signUp";
import { Request,NextFunction, Response } from "express";

export const createUserController = async (req : Request,res : Response,next : NextFunction) => {

    const data = req.body as signUp

    try {
        const result = await createUserService(data)
        console.log(result)
        res.status(201).json({
            message : "Create account success",
            data : result
        })
    } catch (error) {
        return next(error)
    }
}