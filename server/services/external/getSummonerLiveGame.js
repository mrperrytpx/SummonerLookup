const fetch = require("node-fetch");

const getSummonerLiveGame = async (server, id) => {
    // Fetch live game data
    const liveGameUrl = `https://${server}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${process.env.RIOT_API}`;
    const liveGameResponse = await fetch(liveGameUrl);
    // Just assuming the server works always to send the proper error to the front end
    if (!liveGameResponse.ok) throw new Error("Player isn't currently in a matchmade game");
    const liveGameData = await liveGameResponse.json();
    return liveGameData;
};

module.exports = getSummonerLiveGame;