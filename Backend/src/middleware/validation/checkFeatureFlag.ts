import { Request,Response,NextFunction } from "express";
import { featureFlag } from "../../../utils/feature/flag";
import { responseError } from "../../error/responseError";

export const checkFeatureFlag = (flagName : string) => {
    return async (req: Request,res: Response,next : NextFunction) => {
        const isEnabled = await featureFlag(flagName)
        if(!isEnabled){
            throw new responseError(403,` Feature "${flagName}" is disabled.`)
        }
        next()
    }
}