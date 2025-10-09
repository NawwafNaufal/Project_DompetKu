import { transaction } from "../../model/auth";
import prisma from "../../../config/prismaClient";
import { Transaction } from "@prisma/client";

export const createTransactionService = async (data : transaction, userId : string): Promise<Transaction> => {
    const getIdUser = userId

    const addData = await prisma.transaction.create({
        data : {
            userId : getIdUser,
            ...data
        }
    })

    return addData
}