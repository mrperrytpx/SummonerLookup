const fetch = require("node-fetch");
const ApiError = require("../../utils/ApiError");
const { redisClient } = require("../../utils/redisClient");

const getMatch = async (region, game) => {

    const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${game}?api_key=${process.env.RIOT_API}`;
    const gameResponse = await fetch(gameUrl);

    if (!gameResponse.ok) {
        if (gameResponse.status === 404) throw new ApiError("Match not found", 404, gameUrl);
        if (gameResponse.status === 429) throw new ApiError("Rate liit exceeded", 429, gameUrl);
    }

    const gameData = await gameResponse.json();

    const gameVersion = gameData.info.gameVersion.split(".").slice(0, 2);
    if (+gameVersion[0] < 11) throw new Error("Game too old");
    if (+gameVersion[0] === 11 && +gameVersion[1] < 4) throw new Error("Game too old");

    redisClient.set(gameData.metadata.matchId, JSON.stringify(gameData), {
        EX: 86400 // 1 day
    });

    return gameData;
};

module.exports = getMatch;