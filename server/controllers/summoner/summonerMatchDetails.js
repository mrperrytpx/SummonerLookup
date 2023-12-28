const { getMatch } = require("../../services/external");
const { leagueRegion } = require("../../utils/leagueRegion");

const summonerMatchDetails = async (req, res) => {
    const { matchId } = req.params;

    const server = matchId.split("_")[0].toLowerCase();
    const region = leagueRegion(server);

    const matchData = await getMatch(region, matchId);

    res.status(200).json(matchData);
};

module.exports = summonerMatchDetails;

/**
 * @openapi
 *components:
 *  schemas:
 *    MatchResponse:
 *      type: object
 *      properties:
 *        metadata:
 *          type: object
 *        info:
 *          type: object
 */
