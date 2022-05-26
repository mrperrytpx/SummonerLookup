const router = require("express").Router();

const { asyncHandler } = require("../../handlers/");
const { getSummonerRankedStats } = require("../../services/external");

router.get("/:server/:summonerId", asyncHandler(async (req, res) => {

    const { server, summonerId } = req.params;

    const rankedStanding = await getSummonerRankedStats(server, summonerId);
    console.log(rankedStanding);

    res.json(rankedStanding);
}));

module.exports = router;