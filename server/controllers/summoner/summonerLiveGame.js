const { getSummonerLiveGame } = require("../../services/external/");

const summonerLiveGame = async (req, res) => {
    const { server, puuid } = req.params;

    const liveGameData = await getSummonerLiveGame(server, puuid);

    if (!liveGameData) {
        res.sendStatus(404);
        return;
    }

    res.status(200).json(liveGameData);
};

module.exports = summonerLiveGame;

/**
 * @openapi
 *components:
 *  schemas:
 *    LiveGameResponse:
 *      type: object
 *      properties:
 *        gameId:
 *          type: number
 *        mapId:
 *          type: number
 *        gameMode:
 *          type: string
 *        gameType:
 *          type: string
 *        gameQueueConfigId:
 *          type: number
 *        participants:
 *          type: array
 *          minItems: 5
 *          maxItems: 10
 *          items:
 *            type: object
 *            properties:
 *              teamId:
 *                type: number
 *              spell1Id:
 *                type: number
 *              spell2Id:
 *                type: number
 *              championId:
 *                type: number
 *              summonerName:
 *                type: string
 *              bot:
 *                type: boolean
 *              summonerId:
 *                type: string
 *              gameCustomizationObjects:
 *                type: array
 *                items: {}
 *              perks:
 *                type: object
 *                properties:
 *                  perkIds:
 *                    type: array
 *                    minItems: 9
 *                    maxItems: 9
 *                    items:
 *                      type: number
 *                  perkStyle:
 *                    type: number
 *                  perkSubStyle:
 *                    type: number
 *        observers:
 *          type: object
 *          properties:
 *            encryptionKey:
 *              type: string
 *        platformId:
 *          type: string
 *        bannedChampions:
 *          type: array
 *          minItems: 10
 *          items:
 *            type: object
 *            properties:
 *              championId:
 *                type: number
 *              teamId:
 *                type: number
 *              pickTurn:
 *                type: number
 *        gameStartTime:
 *          type: number
 *        gameLength:
 *          type: number
 */
