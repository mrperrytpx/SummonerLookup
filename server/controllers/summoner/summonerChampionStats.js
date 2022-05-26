const router = require("express").Router();

const { asyncHandler } = require("../../handlers");
const { getSummonerChampionStats } = require("../../services/external");

router.get("/:server/:summonerName", asyncHandler(async (req, res) => {
    const { server, summonerName } = req.params;

    let statsData = await getSummonerChampionStats(server, summonerName);

    statsData = statsData.data.fetchPlayerStatistics[0].basicChampionPerformances;

    res.status(200).json(statsData);
}));

module.exports = router;