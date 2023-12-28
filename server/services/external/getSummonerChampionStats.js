const fetch = require("node-fetch");
const { leagueRegion } = require("../../utils/leagueRegion");
const ApiError = require("../../utils/ApiError");

const getSummonerChampionStats = async (server, summonerName, puuid) => {
    const region = leagueRegion(server);

    const accountUrl = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${process.env.RIOT_API}`;
    const accountResponse = await fetch(accountUrl);

    if (!accountResponse.ok) {
        if (accountResponse.status === 429) {
            throw new ApiError("Rate limit exceeded", 429, accountUrl);
        } else {
            throw new ApiError("No account", 404, accountUrl);
        }
    }

    const { tagLine } = await accountResponse.json();

    const statsResponse = await fetch("https://u.gg/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            query getPlayerStats($queueType: [Int!], $regionId: String!, $role: Int!, $seasonId: Int!, $riotUserName: String!, $riotTagLine: String!) {
              fetchPlayerStatistics(
                queueType: $queueType
                riotUserName: $riotUserName
                riotTagLine: $riotTagLine
                regionId: $regionId
                role: $role
                seasonId: $seasonId
              ) {
                basicChampionPerformances {
                  assists
                  championId
                  cs
                  damage
                  damageTaken
                  deaths
                  doubleKills
                  gold
                  kills
                  maxDeaths
                  maxKills
                  pentaKills
                  quadraKills
                  totalMatches
                  tripleKills
                  wins
                  __typename
                }
                exodiaUuid
                puuid
                queueType
                regionId
                role
                seasonId
                __typename
              }
            }`,
            variables: {
                queueType: [420, 440],
                regionId: `${server.toLowerCase()}`,
                riotTagLine: `${tagLine}`,
                role: 7,
                seasonId: 999,
                riotUserName: `${summonerName}`,
            },
        }),
    });

    if (!statsResponse.statusText === "OK")
        throw new Error("U.GG Might be having issues");

    const statsData = await statsResponse.json();

    return statsData;
};

module.exports = getSummonerChampionStats;
