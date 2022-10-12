const { getSummonerMatches, getMatch } = require("../../services/external/");
const leagueRegion = require("../../utils/leagueRegion");

const summonerMatches = async (req, res) => {
    const { server, puuid, page } = req.params;

    const region = leagueRegion(server);
    const [matchIds, hasNextPage] = await getSummonerMatches(region, puuid, page);
    // Fetch each match
    let matchResponses = await Promise.allSettled(matchIds.map(game => getMatch(region, game)));
    // Filter out rejects
    const matchesData = matchResponses.filter(match => match.status === "fulfilled");

    res.json({ matchesData, hasNextPage });
};

module.exports = summonerMatches;