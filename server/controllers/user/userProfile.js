const { getUserFromDB } = require("../../services/internal/");

const userProfile = async (req, res) => {
	const { _id } = req.user;

	// get the array of followers the user follows from the DB
	const { following } = await getUserFromDB({ _id: _id });

	res.json(following);
};

module.exports = userProfile;