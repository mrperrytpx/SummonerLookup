const { getSummonerMatches, getMatch } = require("../../services/external/");
const leagueRegion = require("../../utils/leagueRegion");
const { redisClient } = require("../../utils/redisClient");

const summonerMatches = async (req, res) => {
    const { server, puuid, page } = req.params;

    const region = leagueRegion(server);
    const [matchIds, hasNextPage] = await getSummonerMatches(region, puuid, page);
    // Fetch each match
    const matchResponses = await Promise.allSettled(matchIds.map(async (game) => {

        const cachedGame = await redisClient.get(game);
        if (cachedGame) {
            const parsedGame = JSON.parse(cachedGame);
            return parsedGame;
        }

        return getMatch(region, game);
    }));
    // Filter out rejects
    const matchesData = matchResponses.filter(match => match.status === "fulfilled");

    res.json({ matchesData, hasNextPage: hasNextPage && matchesData >= matchResponses });
};

module.exports = summonerMatches;

/**
 * @openapi
 *components:
 *  schemas:
 *    MatchesResponse:
 *      type: array
 *      items:
 *        type: object
 *        properties:
 *          status:
 *            type: string
 *          value:
 *            type: object
 *            properties:
 *              metadata:
 *                type: object
 *              info:
 *                type: object
 */