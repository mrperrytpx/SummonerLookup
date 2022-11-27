const { sign } = require("jsonwebtoken");
const signingOptions = require("./signingOptions");

/**
	 * @openapi
	 * components:
	 *   securitySchemas:
	 *     cookieAuth:
	 *       in: cookie
	 *       type: string
	 *       name: "slup"
	 *       default: "slup=[string]"
	 */
const createAccessToken = (userId, username) => {
	// Sign (create) a JWT access token with the user._id, signed with the access_secret .env
	const payload = { _id: userId };

	const signOptions = signingOptions(username, "30m");

	const KEY = process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY;

	const accessToken = sign(payload, KEY, signOptions);
	return accessToken;
};

const createRefreshToken = (userId, username) => {
	// Sign (create) a JWT refresh token with the user._id, signed with the refresh_secret .env
	const payload = { _id: userId };

	const signOptions = signingOptions(username, "7d");

	const KEY = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

	const refreshToken = sign(payload, KEY, signOptions);
	return refreshToken;
};

const sendAccessToken = (res, token, rememberMe) => {
	// Send the access token as a response
	const payload = {
		accessToken: token
	};
	if (rememberMe) {
		payload.rememberMe = rememberMe;
	}
	res.json(payload);
};

const sendRefreshToken = (res, token) => {
	// send the refresh token as a cookie

	/**
	 * @openapi
	 * components:
	 *   securitySchemas:
	 *     cookieAuth:
	 *       in: cookie
	 *       type: string
	 *       name: "slup"
	 *       default: "slup=[string]"
	 */

	res.cookie("slup", token, {
		secure: true,
		httpOnly: true,
		signed: true,
		maxAge: 60 * 60 * 24 * 7 * 1000, // 7 days croissant 
		sameSite: true,
	});
};

module.exports = {
	createAccessToken,
	createRefreshToken,
	sendAccessToken,
	sendRefreshToken
};