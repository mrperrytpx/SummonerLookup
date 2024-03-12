const { getSummonerRankedStats } = require("../../services/external");

const summonerRankedStats = async (req, res) => {
    const { server, summonerId } = req.params;

    const rankedStanding = await getSummonerRankedStats(server, summonerId);

    res.json(rankedStanding);
};

module.exports = summonerRankedStats;

/**
 * @openapi
 * components:
 *   schemas:
 *     RankedQueueStats:
 *       type: object
 *       properties:
 *         leagueId:
 *           type: string
 *         queueType:
 *           type: string
 *         tier:
 *           type: string
 *         rank:
 *           type: string
 *         summonerId:
 *           type: string
 *         summonerName:
 *           type: string
 *         leaguePoints:
 *           type: number
 *         wins:
 *           type: number
 *         losses:
 *           type: number
 *         veteran:
 *           type: boolean
 *         inactive:
 *           type: boolean
 *         freshBlood:
 *           type: boolean
 *         hotStreak:
 *           type: boolean
 *         miniSeries?:
 *           type: object
 *           properties:
 *             target:
 *               type: number
 *             wins:
 *               type: number
 *             losses:
 *               type: number
 *             progress:
 *               type: string
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     RankedStatsResponse:
 *       type: array
 *       items:
 *         type: object
 *         $ref: "#/components/schemas/RankedQueueStats"
 */
