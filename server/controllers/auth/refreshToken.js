const { verify } = require("jsonwebtoken");
const { createAccessToken,
	createRefreshToken,
	sendRefreshToken,
	sendAccessToken,
	verifyOptions
} = require("../../utils/tokens");

const { updateUserRefreshToken, getUserFromDB } = require("../../services/internal");

const refreshToken = async (req, res) => {
	// get the token from the cookie
	const cookieToken = req.signedCookies.slup;

	// If we don't have a token in our request, set the access token to nothing
	if (!cookieToken) return res.json({ accesstoken: '' });

	// Verify the refresh token
	const KEY = process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY;
	let payload = null;
	try {
		payload = verify(cookieToken, KEY, verifyOptions);
		if (!payload) throw new Error("Invalid Refresh token");
	} catch (err) {
		// If the refresh token isn't verified, set the access token to nothing
		return res.send({ accesstoken: '' });
	}
	// Find a user with the refresh token ID
	const user = await getUserFromDB({ _id: payload._id });

	// If there isn't a user, set the access token to nothing
	if (!user) return res.send({ accesstoken: '' });
	// If the user document doesn't have the same refresh token as the recieved refresh token
	if (user.refreshToken !== cookieToken) {
		console.log("ARE TOKENS EQUAL?: ", user.refreshToken === cookieToken);
		return res.send({ accesstoken: '' });
	}

	// create access and refresh tokens
	const accessToken = createAccessToken(user._id, payload.sub);
	const refreshToken = createRefreshToken(user._id, payload.sub);

	// Update users refresh token in the DB with a new refresh token 
	await updateUserRefreshToken(user._id, refreshToken);
	// Send both tokens to the front-end
	sendRefreshToken(res, refreshToken);
	sendAccessToken(res, accessToken);

};

module.exports = refreshToken;