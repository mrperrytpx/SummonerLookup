const router = require("express").Router();

// MongoDB User schema
const { asyncHandler } = require("../../handlers");
const { deleteUser } = require("../../services/internal");

router.delete("/", asyncHandler(async (req, res) => {
	const { _id } = req.user; // Get the _id from request.user which was set in the authorize middleware
	await deleteUser({ _id: _id });
	res.clearCookie('slup'); // Clear the refresh cookie
	res.sendStatus(204); // Send success

}));

module.exports = router;