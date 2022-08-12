const { registerValidation } = require("../../validations");
const { createNewUser, getUserFromDB } = require("../../services/internal");
const hashPassword = require("../../utils/hashPassword");
const ApiError = require("../../utils/ApiError");

const register = async (req, res) => {
	// Destructure the error from the loginValidationf unction
	const { error } = registerValidation(req.body);
	// If there's an error, throw the error message
	if (error) throw new ApiError(`${error.details[0].message}`, 400);

	// Check if the user already exists in the DB
	const emailExists = await getUserFromDB({ email: req.body.email });
	// If the user exists, throw an error
	if (emailExists) throw new ApiError("User already exists", 409);

	const hashedPassword = await hashPassword(req.body.password);

	await createNewUser(req, hashedPassword);

	res.sendStatus(201);
};

module.exports = register;