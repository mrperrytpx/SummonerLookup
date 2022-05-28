const { registerValidation } = require("../../validations");
const { createNewUser, getUserFromDB } = require("../../services/internal");
const hashPassword = require("../../utils/hashPassword");

const register = async (req, res) => {
	// Destructure the error from the loginValidationf unction
	const { error } = registerValidation(req.body);
	// If there's an error, throw the error message
	if (error) throw new Error(`${error.details[0].message}`);

	// Check if the user already exists in the DB
	const emailExists = await getUserFromDB({ email: req.body.email });
	// If the user exists, throw an error
	if (emailExists) throw new Error("User already exists");

	const hashedPassword = await hashPassword(req.body.password);

	await createNewUser(req, hashedPassword);

	res.send({ message: "User created" });
};

module.exports = register;