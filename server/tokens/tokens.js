const { sign } = require("jsonwebtoken");

const createAccessToken = (userId, username) => {
	// Sign (create) a JWT access token with the user._id, signed with the access_secret .env
	const payload = { _id: userId };

	const iss = "Summoner Lookup";
	const sub = username;
	const aud = process.env.WEBSITE_URL;
	const exp = "15m";

	const signOptions = {
		issuer: iss,
		audience: aud,
		subject: sub,
		expiresIn: exp,
		algorithm: 'RS256'
	};

	const KEY = process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY;

	const accessToken = sign(payload, KEY, signOptions);
	return accessToken;
}

const createRefreshToken = (userId, username) => {
	// Sign (create) a JWT refresh token with the user._id, signed with the refresh_secret .env
	const payload = { _id: userId };

	const iss = "Summoner Lookup";
	const sub = username;
	const aud = process.env.WEBSITE_URL;
	const exp = "7d";

	const signOptions = {
		issuer: iss,
		audience: aud,
		subject: sub,
		expiresIn: exp,
		algorithm: 'RS256'
	};

	const KEY = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

	const refreshToken = sign(payload, KEY, signOptions);
	return refreshToken;
}

const sendAccessToken = (res, token) => {
	// Send the access token as a response
	res.json({ accessToken: token });
}

const sendRefreshToken = (res, token) => {
	// send the refresh token as a cookie
	res.cookie("slup", token, {
		httpOnly: true,
		path: "/api/refresh_token"
	});
}

module.exports = {
	createAccessToken,
	createRefreshToken,
	sendAccessToken,
	sendRefreshToken
}