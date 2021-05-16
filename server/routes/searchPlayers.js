const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/:region/:server/:summonerName/", async (req, res) => {
    const { region, server, summonerName } = req.params;
    let payload = {};
    try {
        // Fetch account data to get the account ID
        const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API}`;
        const accountData = await(await fetch(accountUrl)).json();
        if (!accountData) throw new Error("Account not found");

        payload.accountData = {
            puuid: accountData.puuid,
            summonerId: accountData.id,
            summonerName: accountData.name,
            summonerLevel: accountData.summonerLevel,
            profileIconId: accountData.profileIconId
        };
        payload.games = [];

        // Fetch the match IDs
        const matchesUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${accountData.puuid}/ids?start=0&count=5&api_key=${process.env.RIOT_API}`;
        const matchesData = await(await fetch(matchesUrl)).json();
        if (!matchesData) throw new Error("No matches on the account");

        for (let match of matchesData) {
            const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${process.env.RIOT_API}`;
            const gameData = await(await fetch(gameUrl)).json();
            for (let summoner of gameData.info.participants) {
                if (summoner.summonerName.toLowerCase() === summonerName.toLowerCase()) {
                    let game = {
                        matchId: match,
                        championName: summoner.championName,
                        championId: summoner.championId,
                        summoner1: summoner.summoner1Id,
                        summoner2: summoner.summoner2Id,
                        keystone: summoner.perks.styles[0].selections[0].perk,
                        secondary: summoner.perks.styles[1].style,
                        item0: summoner.item0,
                        item1: summoner.item1,
                        item2: summoner.item2,
                        item3: summoner.item3,
                        item4: summoner.item4,
                        item5: summoner.item5,
                        item6: summoner.item6,
                        kills: summoner.kills,
                        assists: summoner.assists,
                        deaths: summoner.deaths,
                        win: summoner.win
                    };
                    payload.games.push(game);
                }
            }
        }

        const rankedUrl = `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountData.id}?api_key=${process.env.RIOT_API}`;
        const rankedStats = await(await fetch(rankedUrl)).json();
        if (rankedStats.length === 0) {
            payload.ranked = {};
        } else {
            payload.ranked = {
                tier: rankedStats[0].tier,
                division: rankedStats[0].rank,
                LP: rankedStats[0].leaguePoints,
                wins: rankedStats[0].wins,
                losses: rankedStats[0].losses,
            };
        }
        
        res.status(200).json(payload);

    } catch (err) {
        res.status(404).json(err.message);
    }
});

module.exports = router;