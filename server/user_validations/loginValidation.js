const Joi = require("@hapi/joi");

const loginValidation = (data) => {
    const validationSchema = Joi.object({
        username: Joi.string().min(3).required().pattern(new RegExp("^[a-zA-z0-9_-]+")),
        password: Joi.string().min(8).required()
    })
    return validationSchema.validate(data);
}

module.exports = loginValidation;