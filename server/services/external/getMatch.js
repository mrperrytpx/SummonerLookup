const fetch = require("node-fetch");

const getMatch = async (region, game) => {
    const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${game}?api_key=${process.env.RIOT_API}`;
    const gameData = await fetch(gameUrl);
    return gameData;
};

module.exports = getMatch;