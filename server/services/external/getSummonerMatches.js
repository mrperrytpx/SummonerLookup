const fetch = require("node-fetch");

const getSummonerMatches = async (region, puuid) => {
    const matchesUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.RIOT_API}`;
    // console.log(matchesUrl);
    const matchesResponse = await fetch(matchesUrl);
    if (!matchesResponse.ok) throw new Error("No matches on the account");
    const matchIds = await matchesResponse.json();
    return matchIds;
};

module.exports = getSummonerMatches;