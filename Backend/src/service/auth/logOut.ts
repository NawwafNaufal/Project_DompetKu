import { responseError } from "../../error/responseError";
import { Response } from "express";
import prisma from "../../../config/prismaClient";

export const logOutService = async (res:Response) => {
    const getId = res.locals.user

    const getUser = await prisma.user.findFirst({
        where : {
            email : getId.email
        }
    })

    await prisma.refreshToken.delete({
        where : {
            userId : getUser!.id
        }
    })
} 