const { compare } = require("bcryptjs");

const { createAccessToken,
	createRefreshToken,
	sendAccessToken,
	sendRefreshToken
} = require("../../utils/tokens");

const { loginValidation } = require("../../validations");
const { updateUserRefreshToken, getUserFromDB } = require("../../services/internal");
const ApiError = require("../../utils/ApiError");

const login = async (req, res) => {
	const { email, password, rememberMe } = req.body;

	// Destructure the error from the loginValidationf unction
	const { error } = loginValidation({ email, password });
	// If there's an error, throw the error message
	if (error) throw new ApiError(`${error.details[0].message}`, 400, req.url);

	// Fetch the user if it exists in the DB
	const user = await getUserFromDB({ email: email });
	if (!user) throw new ApiError("User doesn't exist", 400, req.url);

	// CONFIRM BY EMAIL - TBD
	// if (!user.confirmed) return res.status(400).json("Please confirm your email to login");
	// Check if the password is correct
	const valid = await compare(password, user.password);
	if (!valid) throw new ApiError("Invalid Password", 400, req.url);

	// Create a refresh and an access token
	const accessToken = createAccessToken(user._id, email, rememberMe);
	const refreshToken = createRefreshToken(user._id, email);

	// Update the user's document with a refresh token
	// Send the refresh token as a cookie, and access token as a response
	if (rememberMe) {
		console.log("remembering");
		await updateUserRefreshToken(user._id, refreshToken);
		sendRefreshToken(res, refreshToken);
	}
	sendAccessToken(res, accessToken, rememberMe);

};

module.exports = login;