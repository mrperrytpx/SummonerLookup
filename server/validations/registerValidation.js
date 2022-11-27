const Joi = require("@hapi/joi");

/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          minLength: 3
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          minLength: 8
 *          type: string
 *          default: stringPassword123
 */
const registerValidation = (data) => {
	const validationSchema = Joi.object({
		// email is a string, at least 5 character length and is an email
		email: Joi.string().min(5).required().email(),
		// password is a string, at least 3 character length
		password: Joi.string().min(8).required()
	});
	return validationSchema.validate(data);
};

module.exports = registerValidation;