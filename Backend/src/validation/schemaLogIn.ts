import Joi from "joi";

export const scehmaLogIn = Joi.object({
                username : Joi.string()
                            .max(12),
                email : Joi.string()
                        .email(),
                password : Joi.string()
                            .required()
                            .min(6)
}).or('username','email')