const router = require("express").Router();

const { asyncHandler } = require("../../handlers");
const { getUserFromDB } = require("../../services/internal/");

router.get("/", asyncHandler(async (req, res) => {
	const { _id } = req.user;

	// get the array of followers the user follows from the DB
	const { following } = await getUserFromDB({ _id: _id });

	res.json(following);
}));

module.exports = router;