const router = require("express").Router();
const { compare } = require("bcryptjs");
const { createAccessToken,
	createRefreshToken,
	sendAccessToken,
	sendRefreshToken
} = require("../tokens/tokens");

// Validation import for the register form
const loginValidation = require("../user_validations/loginValidation");

// MongoDB User schema
const User = require("../model/User");

router.post("/", async (req, res) => {
	const username = req.body.username;
	// Validating info
	try {
		// Destructure the error from the loginValidationf unction
		const { error } = loginValidation(req.body);
		// If there's an error, throw the error message
		if (error) throw new Error(`${error.details[0].message}`);

		// Fetch the user if it exists in the DB
		const user = await User.findOne({ username: username });
		if (!user) throw new Error("Invalid Username");

		// CONFIRM BY EMAIL - TBD
		// if (!user.confirmed) return res.status(400).json("Please confirm your email to login");
		// Check if the password is correct
		const valid = await compare(req.body.password, user.password);
		if (!valid) throw new Error("Invalid Password");

		// Create a refresh and an access token
		const accessToken = createAccessToken(user._id, username);
		const refreshToken = createRefreshToken(user._id, username);

		// Update the user's document with a refresh token
		await User.updateOne({ _id: user._id }, { "$set": { refreshToken: refreshToken } });

		// Send the refresh token as a cookie, and access token as a response
		sendRefreshToken(res, refreshToken);
		sendAccessToken(res, accessToken);
	} catch (err) {
		res.send({
			error: `${err.message}`
		});
	}

})

module.exports = router;