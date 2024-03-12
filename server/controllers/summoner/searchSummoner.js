const { getSummonerAccountData } = require("../../services/external");
const { leagueRegion } = require("../../utils/leagueRegion");

const searchSummoner = async (req, res) => {
    const { server, summonerName } = req.params;
    const region = leagueRegion(server);

    const accountData = await getSummonerAccountData(server, summonerName);
    const payload = {
        ...accountData,
        region: region,
        server,
    };

    res.json(payload);
};

module.exports = searchSummoner;
