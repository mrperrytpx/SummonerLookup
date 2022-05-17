const { verify, decode } = require("jsonwebtoken");

const { verifyOptions } = require("../tokens/");
const { createAccessToken } = require("../tokens");

module.exports = function (req, _res, next) {
	try {
		// Check if an access token exists in request headers
		let token = req.headers?.authorization.split(" ")[1];
		// const decodedToken = decode(token);

		// const isAccessTokenExpired = Math.floor(Date.now() / 1000) > decodedToken.exp;
		// console.log("is expired? ", isAccessTokenExpired);

		// if (isAccessTokenExpired) {
		// 	console.log("Making new access key");
		// 	const refreshToken = req.signedCookies.slup;
		// 	const REFRESH_KEY = process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY;
		// 	const verifiedRefreshToken = verify(refreshToken, REFRESH_KEY, verifyOptions);
		// 	if (verifiedRefreshToken) {
		// 		console.log("ID: ", verifiedRefreshToken._id, "Username:", verifiedRefreshToken.sub);
		// 		token = createAccessToken(verifiedRefreshToken._id, verifiedRefreshToken.sub);
		// 	}
		// }
		// If there isn't a token, deny access
		if (!token) throw new Error("Access Denied");

		const ACCESS_KEY = process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY;
		// Verify the recieved access token
		const verified = verify(token, ACCESS_KEY, verifyOptions);

		// If the access token is verified, set the request.user to the verified user
		req.user = verified;
		// req.newAccess = token;
		next();
	} catch (err) {
		next(err);
	}
};