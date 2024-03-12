const { getSummonerChallenges } = require("../../services/external");

const summonerChallenges = async (req, res) => {
    const { server, puuid } = req.params;

    const challengesData = await getSummonerChallenges(server, puuid);

    res.status(200).json(challengesData);
};

module.exports = summonerChallenges;

/**
 * @openapi
 * components:
 *   schemas:
 *     ChallengeCategory:
 *       type: object
 *       properties:
 *         level:
 *           type: string
 *         current:
 *           type: number
 *         max:
 *           type: number
 *         percentile:
 *           type: number
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     ChallengesResponse:
 *       type: object
 *       properties:
 *         totalPoints:
 *           type: object
 *           $ref: "#/components/schemas/ChallengeCategory"
 *         categoryPoints:
 *           type: object
 *           properties:
 *             <CATEGORY_NAME>:
 *               type: object
 *               $ref: "#/components/schemas/ChallengeCategory"
 *         challenges:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               challengeId:
 *                 type: number
 *               percentile:
 *                 type: number
 *               level:
 *                 type: string
 *               value:
 *                 type: number
 *               achievedTime?:
 *                 type: number
 *                 format: date-time
 *               position?:
 *                 type: number
 *               playersInLevel?:
 *                 type: number
 *         preferences:
 *           type: object
 *           properties:
 *             bannerAccent:
 *               type: string
 *             title:
 *               type: string
 *             challengeIds:
 *               type: array
 *               minItems: 0
 *               maxItems: 3
 *               items:
 *                 type: number
 */
