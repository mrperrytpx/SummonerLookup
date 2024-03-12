const { getSummonerChampionStats } = require("../../services/external");

function sumObjects(...objects) {
    return objects.reduce((prev, curr) => {
        for (let key in curr) {
            if (curr.hasOwnProperty(key)) {
                if (key === "__typename") {
                    prev["__typename"] = curr["__typename"];
                    continue;
                }
                if (key === "maxKills" || key === "maxDeaths") {
                    prev[key] = prev[key] >= curr[key] ? prev[key] : curr[key];
                    continue;
                }
                if (key === "championId") {
                    prev["championId"] = curr["championId"];
                    continue;
                }
                prev[key] = (prev[key] || 0) + curr[key];
            }
        }
        return prev;
    }, {});
}

const summonerChampionStats = async (req, res) => {
    const { server, summonerName, tagLine } = req.params;

    let statsData = await getSummonerChampionStats(
        server,
        summonerName,
        tagLine
    );

    const statsMap = new Map();
    statsData.data.fetchPlayerStatistics[0].basicChampionPerformances.forEach(
        (champ) => statsMap.set(champ.championId, { ...champ })
    );
    statsData.data.fetchPlayerStatistics[1].basicChampionPerformances.forEach(
        (champ) => {
            if (!statsMap.get(champ.championId)) {
                statsMap.set(champ.championId, { ...champ });
            } else {
                let current = statsMap.get(champ.championId);
                const summedObjects = sumObjects(current, champ);
                statsMap.set(champ.championId, summedObjects);
            }
        }
    );

    const payload = {
        solo: statsData.data.fetchPlayerStatistics[0].basicChampionPerformances,
        flex: statsData.data.fetchPlayerStatistics[1].basicChampionPerformances,
        combined: [...statsMap.values()],
    };

    res.status(200).json(payload);
};

module.exports = summonerChampionStats;

/**
 * @openapi
 * components:
 *   schemas:
 *     ChampionStats:
 *       type: object
 *       properties:
 *         __typename:
 *           type: string
 *         assists:
 *           type: number
 *         championId:
 *           type: number
 *         cs:
 *           type: number
 *         damage:
 *           type: number
 *         damageTaken:
 *           type: number
 *         deaths:
 *           type: number
 *         doubleKills:
 *           type: number
 *         gold:
 *           type: number
 *         kills:
 *           type: number
 *         maxDeaths:
 *           type: number
 *         maxKills:
 *           type: number
 *         pentaKills:
 *           type: number
 *         quadraKills:
 *           type: number
 *         totalMatches:
 *           type: number
 *         tripleKills:
 *           type: number
 *         wins:
 *           type: number
 */

/**
 * @openapi
 *components:
 *  schemas:
 *    ChampionStatsResponse:
 *      type: object
 *      properties:
 *        solo:
 *          type: array
 *          items:
 *            type: object
 *            $ref: "#/components/schemas/ChampionStats"
 *        flex:
 *          type: array
 *          items:
 *            type: object
 *            $ref: "#/components/schemas/ChampionStats"
 *        combined:
 *          type: array
 *          items:
 *            type: object
 *            $ref: "#/components/schemas/ChampionStats"
 */
