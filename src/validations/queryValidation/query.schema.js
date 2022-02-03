import joi from 'joi'

export const querySchema = joi.object({
    name: joi.string().required().empty(),
    email: joi.string().email().required().empty(),
    subject: joi.string().required().empty(),
    message: joi.string().required().empty(),
    location: joi.string().required().empty(),
})