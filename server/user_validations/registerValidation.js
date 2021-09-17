const Joi = require("@hapi/joi");

const registerValidation = (data) => {
	const validationSchema = Joi.object({
		// email is a string, at least 5 character length and is an email
		email: Joi.string().min(5).required().email(),
		// username is a string, at least 3 character length and matches the Regex pattern
		username: Joi.string().min(3).required().pattern(new RegExp("^[a-zA-z0-9_-]+")),
		// password is a string, at least 3 character length
		password: Joi.string().min(8).required()
	})
	return validationSchema.validate(data);
}

module.exports = registerValidation;