const fetch = require("node-fetch");
const ApiError = require("../../utils/ApiError");

const COUNT = 5;

const getSummonerMatches = async (region, puuid, page) => {
    const matchesUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${
        (page - 1) * COUNT
    }&count=${COUNT + 1}&api_key=${process.env.RIOT_API}`;
    const matchesResponse = await fetch(matchesUrl);
    if (!matchesResponse.ok) {
        if (matchesResponse.status === 429) {
            throw new ApiError("Rate limit exceeded", 429, matchesUrl);
        } else {
            throw new ApiError("No matches", 404, matchesUrl);
        }
    }

    const matchIds = await matchesResponse.json();

    const hasNextPage = matchIds.length === 6;

    return [matchIds.slice(0, 5), hasNextPage];
};

module.exports = getSummonerMatches;
