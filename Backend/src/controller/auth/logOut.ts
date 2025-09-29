import { Request, Response, NextFunction } from "express";
import { logOutService } from "../../service/auth/logOut";

export const logOutController = async (res: Response, next: NextFunction) => {
  try {
    const result = await logOutService(res);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({
      message: "Logout Success",
      data: result,
    });
  } catch (error) {
    return next(error);
  }
};
