const router = require("express").Router();
const { hash, genSalt } = require("bcryptjs");

// Validation import for the register form
const { registerValidation } = require("../../validations");

// MongoDB User schema
const User = require("../../model/User");

router.post("/", async (req, res) => {
	// Validating info
	try {
		// Destructure the error from the loginValidationf unction
		const { error } = registerValidation(req.body);
		// If there's an error, throw the error message
		if (error) throw new Error(`${error.details[0].message}`);

		// Check if the user already exists in the DB
		const emailExists = await User.findOne({
			email: req.body.email
		});
		// If the user exists, throw an error
		if (emailExists) throw new Error("User already exists");

		// Hashing the password
		const passwordSalt = await genSalt(12);
		const hashedPassword = await hash(req.body.password, passwordSalt);

		// Setting the information to a new User document
		const user = new User({
			email: req.body.email,
			username: req.body.username,
			password: hashedPassword,
		});

		// Insert the user into the DB
		await user.save();
		res.send({ message: "User created" });
	} catch (err) {
		// Send error
		res.status(400).send({
			error: `${err.message}`
		});
	}
});

module.exports = router;