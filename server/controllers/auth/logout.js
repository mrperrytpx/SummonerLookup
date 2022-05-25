const router = require("express").Router();
const { asyncHandler } = require("../../handlers");

// MongoDB User schema
const User = require("../../db/models/User");

router.post("/", asyncHandler(async (req, res) => {

	// destructure _id from request.user
	const { _id } = req.user;
	// remove the refresh token from the user's document
	await User.updateOne({ _id: _id }, { "$unset": { refreshToken: "" } });

	// clear the cookie with the refresh token
	res.clearCookie('slup');
	return res.send({ message: 'Logged out' });
}));

module.exports = router;