const { getSummonerChallenges } = require("../../services/external");

const summonerChallenges = async (req, res) => {
    const { server, puuid } = req.params;

    const matchData = await getSummonerChallenges(server, puuid);

    res.status(200).json(matchData);
};

module.exports = summonerChallenges;