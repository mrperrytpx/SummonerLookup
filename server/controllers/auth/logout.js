const router = require("express").Router();

// MongoDB User schema
const User = require("../../db/models/User");

router.post("/", async (req, res) => {
	try {
		// destructure _id from request.user
		const { _id } = req.user;
		// remove the refresh token from the user's document
		await User.updateOne({ _id: _id }, { "$unset": { refreshToken: "" } });
	} catch (err) {
		// Send the error if no _id
		res.send({
			error: `${err.message}`
		});
	}
	// clear the cookie with the refresh token
	res.clearCookie('slup');
	return res.send({
		message: 'Logged out',
	});
});

module.exports = router;