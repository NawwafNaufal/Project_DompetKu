import { CookieOptions } from "express";

const cookiesOptions: {
    accessToken: CookieOptions;
    refreshToken: CookieOptions;
} = {
    accessToken: {
        httpOnly: true,
        secure: true,
        sameSite: "strict", 
        maxAge: 1 * 60 * 60 * 1000,
        },
    refreshToken: {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, 
        },
};

export default cookiesOptions;
