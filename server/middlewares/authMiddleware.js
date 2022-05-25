const { verify } = require("jsonwebtoken");

const { verifyOptions } = require("../utils/tokens");

module.exports = function (req, _res, next) {
	try {
		// Check if an access token exists in request headers
		let token = req.headers?.authorization.split(" ")[1];
		if (!token) throw new Error("Access Denied");

		const ACCESS_KEY = process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY;
		// Verify the recieved access token
		const verified = verify(token, ACCESS_KEY, verifyOptions);

		// If the access token is verified, set the request.user to the verified user
		console.log(verified);
		// req.newAccess = token;
		next();
	} catch (err) {
		next(err);
	}
};