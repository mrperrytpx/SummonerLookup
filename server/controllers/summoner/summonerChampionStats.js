const { getSummonerChampionStats } = require("../../services/external");

function sumObjects(...objects) {
    return objects.reduce((prev, curr) => {
        for (let key in curr) {
            if (curr.hasOwnProperty(key)) {
                if (key === "__typename") {
                    prev["__typename"] = curr["__typename"];
                    continue;
                }
                if (key === "championId") {
                    prev["championId"] = curr["championId"];
                    continue;
                };
                prev[key] = (prev[key] || 0) + curr[key];
            }
        }
        return prev;
    }, {});
}

const summonerChampionStats = async (req, res) => {
    const { server, summonerName } = req.params;

    let statsData = await getSummonerChampionStats(server, summonerName);

    const statsMap = new Map();
    statsData.data.fetchPlayerStatistics[0].basicChampionPerformances.forEach((champ) => statsMap.set(champ.championId, { ...champ }));
    statsData.data.fetchPlayerStatistics[1].basicChampionPerformances.forEach((champ) => {
        if (!statsMap.get(champ.championId)) {
            let current = statsMap.get(champ.championId);
            const summedObjects = sumObjects(current, champ);
            statsMap.set(champ.championId, { ...summedObjects });
        } else {
            statsMap.set(champ.championid, { ...champ });
        }
    });

    const payload = {
        "Solo": statsData.data.fetchPlayerStatistics[0].basicChampionPerformances,
        "Flex": statsData.data.fetchPlayerStatistics[1].basicChampionPerformances,
        "Combined": [...statsMap.values()]
    };
    res.status(200).json(payload);
};

module.exports = summonerChampionStats;