const { verify } = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");

const { verifyOptions } = require("../utils/tokens");

module.exports = function (req, _res, next) {
	try {
		// Check if an access token exists in request headers
		let token = req.headers?.authorization.split(" ")[1];
		if (!token) throw new ApiError("Access Denied", 403, req.url);

		const ACCESS_KEY = process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY;
		// Verify the recieved access token
		const verified = verify(token, ACCESS_KEY, verifyOptions);

		// If the access token is verified, set the request.user to the verified user
		req.user = verified;
		next();
	} catch (err) {
		next(err);
	}
};