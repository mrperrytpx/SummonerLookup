const array1 = [
    {
        "assists": 115,
        "championId": 51,
        "cs": 2937,
        "damage": 288697,
        "deaths": 68,
        "doubleKills": 16,
        "gold": 181963,
        "kills": 102,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 15,
        "tripleKills": 3,
        "wins": 9
    },
    {
        "assists": 93,
        "championId": 202,
        "cs": 1483,
        "damage": 155223,
        "deaths": 38,
        "doubleKills": 4,
        "gold": 98854,
        "kills": 52,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 8,
        "tripleKills": 1,
        "wins": 2
    },
    {
        "assists": 34,
        "championId": 222,
        "cs": 801,
        "damage": 100900,
        "deaths": 23,
        "doubleKills": 4,
        "gold": 50404,
        "kills": 24,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 4,
        "tripleKills": 1,
        "wins": 1
    },
    {
        "assists": 12,
        "championId": 115,
        "cs": 494,
        "damage": 48830,
        "deaths": 16,
        "doubleKills": 1,
        "gold": 29171,
        "kills": 13,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 3,
        "tripleKills": 0,
        "wins": 1
    },
    {
        "assists": 24,
        "championId": 81,
        "cs": 341,
        "damage": 48079,
        "deaths": 9,
        "doubleKills": 1,
        "gold": 24387,
        "kills": 12,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 2,
        "tripleKills": 0,
        "wins": 2
    },
    {
        "assists": 10,
        "championId": 110,
        "cs": 371,
        "damage": 28344,
        "deaths": 11,
        "doubleKills": 0,
        "gold": 21801,
        "kills": 12,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 2,
        "tripleKills": 0,
        "wins": 0
    },
    {
        "assists": 6,
        "championId": 429,
        "cs": 135,
        "damage": 8705,
        "deaths": 4,
        "doubleKills": 0,
        "gold": 8156,
        "kills": 4,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 1,
        "tripleKills": 0,
        "wins": 1
    },
    {
        "assists": 6,
        "championId": 236,
        "cs": 332,
        "damage": 18874,
        "deaths": 3,
        "doubleKills": 0,
        "gold": 16168,
        "kills": 2,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 1,
        "tripleKills": 0,
        "wins": 1
    },
    {
        "assists": 10,
        "championId": 67,
        "cs": 281,
        "damage": 20464,
        "deaths": 3,
        "doubleKills": 2,
        "gold": 17029,
        "kills": 8,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 1,
        "tripleKills": 0,
        "wins": 1
    }
];

const array2 = [
    {
        "assists": 13,
        "championId": 202,
        "cs": 217,
        "damage": 48363,
        "deaths": 6,
        "doubleKills": 4,
        "gold": 17438,
        "kills": 23,
        "pentaKills": 0,
        "quadraKills": 1,
        "totalMatches": 1,
        "tripleKills": 3,
        "wins": 1
    },
    {
        "assists": 2,
        "championId": 267,
        "cs": 16,
        "damage": 5165,
        "deaths": 9,
        "doubleKills": 0,
        "gold": 4266,
        "kills": 0,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 1,
        "tripleKills": 0,
        "wins": 0
    },
    {
        "assists": 7,
        "championId": 127,
        "cs": 133,
        "damage": 22286,
        "deaths": 9,
        "doubleKills": 0,
        "gold": 9903,
        "kills": 7,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 1,
        "tripleKills": 0,
        "wins": 0
    },
    {
        "assists": 3,
        "championId": 81,
        "cs": 166,
        "damage": 21827,
        "deaths": 10,
        "doubleKills": 0,
        "gold": 9976,
        "kills": 4,
        "pentaKills": 0,
        "quadraKills": 0,
        "totalMatches": 1,
        "tripleKills": 0,
        "wins": 0
    }
];

function sumObjects(...objects) {
    return objects.reduce((prev, curr) => {
        for (let key in curr) {
            if (curr.hasOwnProperty(key)) {
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

const statsMap = new Map();
array1.forEach((champ) => statsMap.set(champ.championId, { ...champ }));

array2.forEach((champ) => {
    if (!statsMap.get(champ.championId)) {
        statsMap.set(champ.championId, { ...champ });
    } else {
        let current = statsMap.get(champ.championId);
        const summedObjects = sumObjects(current, champ);
        statsMap.set(champ.championId, summedObjects);
    }
});

console.log(statsMap.get(81));
// console.log([...statsMap]);
// console.log([...statsMap.values()]);