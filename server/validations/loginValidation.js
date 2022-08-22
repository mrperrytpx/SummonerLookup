const Joi = require("@hapi/joi");

const loginValidation = (data) => {
	const validationSchema = Joi.object({
		// username is a string, at least 3 character length and matches the Regex pattern
		email: Joi.string().min(3).required(),
		// password is a string, at least 8 character length
		password: Joi.string().min(8).required()
	});
	return validationSchema.validate(data);
};

module.exports = loginValidation;