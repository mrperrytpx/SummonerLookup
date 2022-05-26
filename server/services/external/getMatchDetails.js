const fetch = require("node-fetch");

const getMatchDetails = async (region, id) => {
    const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${process.env.RIOT_API}`;
    const response = await fetch(url);
    if (!response.status === 200) throw new Error("Invalid Match");

    const matchData = await response.json();
    return matchData;
};

module.exports = getMatchDetails;