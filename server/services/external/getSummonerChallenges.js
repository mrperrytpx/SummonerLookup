const fetch = require("node-fetch");

const getSummonerChallenges = async (server, puuid) => {

    const playerChallengesUrl = `https://${server}.api.riotgames.com/lol/challenges/v1/player-data/${puuid}?api_key=${process.env.RIOT_API}`;
    const playerChallengesResponse = await fetch(playerChallengesUrl);

    if (!playerChallengesResponse.ok) throw new Error("idno yet");
    const playerChallengesData = await playerChallengesResponse.json();

    return playerChallengesData;
};

module.exports = getSummonerChallenges;