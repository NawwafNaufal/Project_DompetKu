import { PrismaClient } from "@prisma/client";
import { responseError } from "../../error/responseError";
import { Response } from "express";

export const logOutService = async (res:Response) => {

    const prisma = new PrismaClient()

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