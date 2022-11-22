const fetch = require("node-fetch");

const getSummonerChallenges = async (server, puuid) => {

    const playerChallengesUrl = `https://${server}.api.riotgames.com/lol/challenges/v1/player-data/${puuid}?api_key=${process.env.RIOT_API}`;
    const playerChallengesResponse = await fetch(playerChallengesUrl);

    if (!playerChallengesResponse.ok) throw new Error("idno yet");
    const playerChallengesData = await playerChallengesResponse.json();

    const startingNumbers = [1, 2, 3, 4, 5, 6];
    const challengeCategory = (startingNumber) => {
        return playerChallengesData?.challenges
            ?.filter((challenge) => (challenge.challengeId + "").charAt(0) === startingNumber + "")
            .sort((a, b) => {
                if (a.challengeId > b.challengeId) return 1;
                if (a.challengeId < b.challengeId) return -1;
                return 0;
            });
    };

    const challengesMap = {};
    const subcategories = () => {
        return startingNumbers.map((x) => challengeCategory(x)).flat()
            .filter((challenge) => challenge.challengeId % 100 === 0)
            .forEach((challenge) => challengesMap[challenge.challengeId] = [challenge]);
    };
    subcategories();

    const challs = () => {
        return startingNumbers.map((x) => challengeCategory(x)).flat()
            .filter((challenge) => challenge.challengeId % 100 !== 0)
            .forEach((challenge) => {
                if (challenge.challengeId.toString().length === 1) {
                    challengesMap[challenge.challengeId.toString()] = challenge;
                    return;
                }
                if (challenge.challengeId.toString().length === 7) {
                    const key = challenge.challengeId.toString().slice(0, 5) + "00";
                    if (!challengesMap[key].includes(challenge.challengeId)) {
                        challengesMap[key].push(challenge);
                    }
                } else {
                    const key = challenge.challengeId.toString().slice(0, 4) + "00";
                    if (!challengesMap.hasOwnProperty(key)) {
                        challengesMap[key] = [challenge];
                        return;
                    }
                    if (!challengesMap[key].includes(challenge.challengeId)) {
                        challengesMap[key].push(challenge);
                    }
                }
            });
    };
    challs();

    return challengesMap;
};

module.exports = getSummonerChallenges;