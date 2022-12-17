import joi from 'joi';


export const createUserModel = joi.object({
    name: joi.string().required().min(3).max(30),
    password: joi.string().required().min(3),
    email: joi.string().email()
})

export const validateSingInModel = joi.object({
    password: joi.string().required().min(3),
    email: joi.string().email()
})