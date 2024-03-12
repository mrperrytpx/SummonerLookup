const fetch = require("node-fetch");
const ApiError = require("../../utils/ApiError");
const { leagueRegion } = require("../../utils/leagueRegion");

const getSummonerAccountData = async (server, summoner) => {
    const [gameName, tagLine] = summoner.split("-");
    const region = leagueRegion(server);

    const riotAccountUrl = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${process.env.RIOT_API}`;
    const riotAccountResponse = await fetch(riotAccountUrl);

    if (!riotAccountResponse.ok) {
        throw new ApiError("Account not found", 404, riotAccountUrl);
    }

    const ritoAccountData = await riotAccountResponse.json();

    const summonerUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${ritoAccountData.puuid}?api_key=${process.env.RIOT_API}`;
    const summonerResponse = await fetch(summonerUrl);

    if (!summonerResponse.ok) {
        throw new ApiError("Account not found", 404, summonerUrl);
    }

    const accountData = await summonerResponse.json();
    return { ...accountData, tagLine: ritoAccountData.tagLine };
};

module.exports = getSummonerAccountData;
