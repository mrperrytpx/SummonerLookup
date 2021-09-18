const { verify } = require("jsonwebtoken");

module.exports = function (req, res, next) {
	try {
		// Check if an access token exists in request headers
		const token = req.headers?.authorization.split(" ")[1];
		// If there isn't a token, deny access
		if (!token) throw new Error("Access Denied");

		const KEY = process.env.JWT_ACCESS_PUBLIC.replace(/\\n/gm, "");
		// Verify the recieved access token
		const verified = verify(token, KEY);

		// If the token can't be verified, deny access
		if (!verified) throw new Error("Access Denied");

		// If the access token is verified, set the request.user to the verified user
		req.user = verified;
		next();
	} catch (err) {
		res.status(403).json();
	}
}