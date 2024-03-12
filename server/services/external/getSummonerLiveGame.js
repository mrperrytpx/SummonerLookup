const fetch = require("node-fetch");

const getSummonerLiveGame = async (server, puuid) => {
    // Fetch live game data
    const liveGameUrl = `https://${server}.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/${puuid}?api_key=${process.env.RIOT_API}`;
    const liveGameResponse = await fetch(liveGameUrl);
    // Just assuming the server works always to send the proper error to the front end
    if (!liveGameResponse.ok) return null;
    const liveGameData = await liveGameResponse.json();
    return liveGameData;
};

module.exports = getSummonerLiveGame;
