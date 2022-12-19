import joi from 'joi'

export const urlModel = joi.object({
    url: joi.string().uri()
})