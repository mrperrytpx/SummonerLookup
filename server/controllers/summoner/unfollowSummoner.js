const router = require("express").Router();

const User = require("../../db/models/User");

router.patch("/", async (req, res) => {
	// Get the ID from request body
	const { id } = req.body;
	try {
		// try to find a user which was put into req.user in the authorization middleware
		const user = await User.findOne({
			_id: req?.user?._id
		});
		// If the player isn't following, throw an error
		if (!user.following.find(summoner => summoner._id.toString() == id)) {
			throw new Error("Not following that player");
		}
		// Update the following array to remove the player with the same document ID
		await User.updateOne({ _id: user._id }, { "$pull": { following: { _id: id } } });
		res.sendStatus(204);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;