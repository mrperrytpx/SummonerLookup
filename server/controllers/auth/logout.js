const router = require("express").Router();
const { asyncHandler } = require("../../handlers");
const { updateUserRefreshToken } = require("../../services/internal");

// MongoDB User schema
router.post("/", asyncHandler(async (req, res) => {
	// destructure _id from request.user
	const { _id } = req.user;
	// remove the refresh token from the user's document
	await updateUserRefreshToken(_id, "");
	// clear the cookie with the refresh token
	res.clearCookie('slup');
	return res.send({ message: 'Logged out' });
}));

module.exports = router;