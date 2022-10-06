const { getSummonerRankedStats } = require("../../services/external");

const summonerRankedStats = async (req, res) => {

    const { server, summonerId } = req.params;

    const rankedStanding = await getSummonerRankedStats(server, summonerId);

    res.json(rankedStanding);
};

module.exports = summonerRankedStats;