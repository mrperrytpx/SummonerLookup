const fetch = require("node-fetch");

const getSummonerChampionStats = async (server, summonerName) => {
    const statsResponse = await fetch("https://u.gg/api", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query getPlayerStats($queueType: [Int!], $regionId: String!, $role: Int!, $seasonId: Int!, $summonerName: String!) {
                    fetchPlayerStatistics(queueType: $queueType, summonerName: $summonerName, regionId: $regionId, role: $role, seasonId: $seasonId) {
                      basicChampionPerformances {
                        championId
                        kills
                        assists
                        deaths
                        cs
                        damage
                        doubleKills
                        tripleKills
                        quadraKills
                        pentaKills
                        gold
                        wins
                        totalMatches
                      }
                      queueType
                      regionId
                      role
                      seasonId
                      __typename
                    }
                  }`,
            variables: {
                "summonerName": `${summonerName}`,
                "regionId": `${server}`,
                "role": 7,
                "seasonId": 16,
                "queueType": [
                    420,
                ]
            }
        })
    });

    if (!statsResponse.statusText === "OK") throw new Error("U.GG Might be having issues");
    const statsData = await statsResponse.json();
    return statsData;
};

module.exports = getSummonerChampionStats;