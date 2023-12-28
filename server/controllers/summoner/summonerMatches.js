const { getSummonerMatches, getMatch } = require("../../services/external/");
const { leagueRegionForMatches } = require("../../utils/leagueRegion");

const summonerMatches = async (req, res) => {
    const { server, puuid, page } = req.params;

    const region = leagueRegionForMatches(server);
    const [matchIds, hasNextPage] = await getSummonerMatches(
        region,
        puuid,
        page
    );
    // Fetch each match
    const matchResponses = await Promise.allSettled(
        matchIds.map(async (game) => {
            return getMatch(region, game);
        })
    );

    // Filter out rejects
    const matchesData = matchResponses
        .filter((match) => match.status === "fulfilled")
        .map((match) => {
            const summonerOnlyMatchData = match.value?.info?.participants.find(
                (participant) => participant.puuid === puuid
            );
            return { ...match.value.info, participants: summonerOnlyMatchData };
        });

    res.json({
        matchesData,
        hasNextPage: hasNextPage && matchesData >= matchResponses,
    });
};

module.exports = summonerMatches;

/**
 * @openapi
 *components:
 *  schemas:
 *    MatchesResponse:
 *      type: array
 *      minItems: 5
 *      items:
 *        type: object
 *        properties:
 *          type: object
 *          properties:
 *            metadata:
 *              type: object
 *            info:
 *              type: object
 */
