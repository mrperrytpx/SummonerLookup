const fetch = require("node-fetch");
const ApiError = require("../../utils/ApiError");

const getMatch = async (region, game) => {
    const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${game}?api_key=${process.env.RIOT_API}`;
    const gameResponse = await fetch(gameUrl);

    if (!gameResponse.ok) {
        if (gameResponse.status === 404) throw new ApiError("Match not found", 404, gameUrl);
        if (gameResponse.status === 429) throw new ApiError("Rate liit exceeded", 429, gameUrl);
    }

    const gameData = await gameResponse.json();

    return gameData;
};

module.exports = getMatch;