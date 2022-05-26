const router = require("express").Router();

const { asyncHandler } = require("../../handlers");
const { getUserFromDB, addToUserFollowing } = require("../../services/internal");

router.post("/", asyncHandler(async (req, res) => {
	// Find a user with the same _id as provided in the JWT Access Token
	const user = await getUserFromDB({ _id: req?.user?._id });
	// If the user is already 'following' a summoner, throw an error so it doesn't 'follow' agian
	if (user.following.find(summoner => summoner.puuid === req.body.puuid)) {
		throw new Error("Already following");
	}
	// Update user's following list with the summoner information
	await addToUserFollowing(user._id, req.body);

	res.sendStatus(204);

}));

module.exports = router;