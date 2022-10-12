const fetch = require("node-fetch");
const ApiError = require("../../utils/ApiError");

const getSummonerAccountData = async (server, notSpacedSummoner) => {
    const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${notSpacedSummoner}?api_key=${process.env.RIOT_API}`;
    const accountResponse = await fetch(accountUrl);
    if (!accountResponse.ok) throw new ApiError("Account not found", 404, accountUrl);
    const accountData = await accountResponse.json();
    return accountData;
};

module.exports = getSummonerAccountData;