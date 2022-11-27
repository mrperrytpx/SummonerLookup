const Joi = require("@hapi/joi");

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginInput:
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
 *        rememberMe:
 *          type: boolean
 *          default: false
 *    LoginResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          type: string
 *        rememberMe:
 *          type: boolean
 */
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