const router = require("express").Router();
const { verify, decode } = require("jsonwebtoken");
const { createAccessToken,
	createRefreshToken,
	sendRefreshToken,
	sendAccessToken
} = require("../tokens/tokens");
const User = require("../model/User");
const verifyOptions = require("../tokens/verifyOptions");

router.post('/', async (req, res) => {
	// get the token from the cookie
	const token = req.signedCookies.slup;

	// If we don't have a token in our request, set the access token to nothing
	if (!token) return res.send({ accesstoken: '' });

	// Verify the refresh token
	const KEY = process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY;

	let payload = null;
	try {
		payload = verify(token, KEY, verifyOptions);
		if (!payload) throw new Error("Invalid Refresh token");
	} catch (err) {
		// If the refresh token isn't verified, set the access token to nothing
		return res.send({ accesstoken: '' });
	}

	// Find a user with the refresh token ID
	const user = await User.findOne({ _id: payload._id });

	// If there isn't a user, set the access token to nothing
	if (!user) return res.send({ accesstoken: '' });
	// If the user document doesn't have the same refresh token as the recieved refresh token
	if (user.refreshToken !== token) return res.send({ accesstoken: '' });

	// create access and refresh tokens
	const accessToken = createAccessToken(user._id, payload.sub);
	const refreshToken = createRefreshToken(user._id, payload.sub);

	// Update users refresh token in the DB with a new refresh token 
	await User.updateOne({ _id: user._id }, { "$set": { refreshToken: refreshToken } });
	// Send both tokens to the front-end
	sendRefreshToken(res, refreshToken);
	sendAccessToken(res, accessToken);

});

module.exports = router;