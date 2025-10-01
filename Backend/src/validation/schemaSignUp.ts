import Joi from "joi"

export const schemaSignUp = Joi.object({
                        username : Joi.string()
                                .required()
                                .max(12),
                        email : Joi.string()
                                .email()
                                .required(),
                        password : Joi.string()
                                .required()
                                .min(6),
})