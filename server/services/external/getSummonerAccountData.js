const fetch = require("node-fetch");

const getSummonerAccountData = async (server, notSpacedSummoner) => {
    const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${notSpacedSummoner}?api_key=${process.env.RIOT_API}`;
    const accountResponse = await fetch(accountUrl);
    if (!accountResponse.ok) throw new Error("Account not found");
    const accountData = await accountResponse.json();
    return accountData;
};

module.exports = getSummonerAccountData;