const router = require("express").Router();

const { asyncHandler } = require("../../handlers");
const { getMatch } = require("../../services/external");

router.get("/:region/:id", asyncHandler(async (req, res) => {
	const { region, id } = req.params;

	const matchData = await getMatch(region, id);

	res.status(200).json(matchData);
}));

module.exports = router;