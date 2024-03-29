const fetch = require("node-fetch");

const getSummonerChampionStats = async (server, summonerName, tagLine) => {
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
