import { createUserService } from "../../service/auth/signUp";
import { NextFunction, Response } from "express";
import { requestControl } from "../../model/signUp";

export const createUserController = async (req : Request,res : Response,next : NextFunction) => {

    const { validationSignUp } = req as unknown as requestControl

    try {
        const result = await createUserService(validationSignUp)
        res.status(201).json({
            message : "Create account success",
            data : result
        })
    } catch (error) {
        return next(error)
    }
}