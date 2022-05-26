const router = require("express").Router();

const { asyncHandler } = require("../../handlers");
const { getSummonerLiveGame } = require("../../services/external/");

router.get("/:server/:summonerName/", asyncHandler(async (req, res) => {

	const { server, id } = req.params;

	const liveGameData = await getSummonerLiveGame(server, id);

	res.status(200).json(liveGameData);

}));

module.exports = router;