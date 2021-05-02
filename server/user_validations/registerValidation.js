const Joi = require("@hapi/joi");

const registerValidation = (data) => {
    const validationSchema = Joi.object({
        email: Joi.string().min(5).required().email(),
        username: Joi.string().min(3).required().pattern(new RegExp("^[a-zA-z0-9_-]+")),
        password: Joi.string().min(8).required()
    })
    return validationSchema.validate(data);
}

module.exports = registerValidation;