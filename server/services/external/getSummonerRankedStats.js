const fetch = require("node-fetch");

const getSummonerRankedStats = async (server, summonerId) => {
    const rankedUrl = `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_API}`;
    const rankedStandingResponse = await fetch(rankedUrl);

    if (!rankedStandingResponse.ok) throw new Error("Uhh riot's having issues it seems");
    const rankedStanding = await rankedStandingResponse.json();

    return rankedStanding;
};

module.exports = getSummonerRankedStats;