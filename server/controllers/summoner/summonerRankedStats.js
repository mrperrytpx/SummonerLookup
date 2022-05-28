const { getSummonerRankedStats } = require("../../services/external");

const summonerRankedStats = async (req, res) => {

    const { server, summonerId } = req.params;

    const rankedStanding = await getSummonerRankedStats(server, summonerId);
    console.log(rankedStanding);

    res.json(rankedStanding);
};

module.exports = summonerRankedStats;