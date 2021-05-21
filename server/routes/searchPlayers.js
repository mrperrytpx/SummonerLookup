const router = require("express").Router();
const fetch = require("node-fetch");
const summonerSpells = require("../static/summonerSpellIDs");
const runes = require("../static/runeIDs");
const servers = require("../static/servers");

router.get("/:region/:server/:summonerName/", async (req, res) => {
    const { region, server, summonerName } = req.params;
    const notSpacedSummoner = summonerName.split(" ").join("%20");
    let payload = {};

    try {
        // Fetch account data to get the account ID
        const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${notSpacedSummoner}?api_key=${process.env.RIOT_API}`;
        const accountData = await(await fetch(accountUrl)).json();
        if (!accountData) throw new Error("Account not found");
        
        // Set the necessary account data into the payload
        payload.accountData = {
            region: region,
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

        // Fetch each match and find which player the requested summonerName is
        for (let match of matchesData) {
            const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${process.env.RIOT_API}`;
            const gameData = await(await fetch(gameUrl)).json();
            
            if (gameData?.status?.status_code === 404) continue;
            for (let summoner of gameData?.info?.participants) {
                if (summoner?.summonerName?.toLowerCase() === summonerName.toLowerCase()) {
                    // Set the game data(s) into the payload
                    
                    let game = {
                        matchId: match,
                        championName: summoner.championName,
                        championId: summoner.championId,
                        summoner1: summonerSpells[summoner.summoner1Id],
                        summoner2: summonerSpells[summoner.summoner2Id],
                        keystone: runes[summoner.perks.styles[0].selections[0].perk],
                        secondary: runes[summoner.perks.styles[1].style],
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

        // Fetch summoner's ranked stats
        const rankedUrl = `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountData.id}?api_key=${process.env.RIOT_API}`;
        const rankedStanding = await(await fetch(rankedUrl)).json();
        // If it returns an empty array, set the payload.ranked to be empty
        if (rankedStanding.length === 0) {
            payload.ranked = {};
        } else {
            // Set the ranked stats data into the payload
            payload.ranked = {
                tier: rankedStanding[0].tier,
                division: rankedStanding[0].rank,
                LP: rankedStanding[0].leaguePoints,
                wins: rankedStanding[0].wins,
                losses: rankedStanding[0].losses,
            };
        }
        const profileResponse = await fetch(`https://red.op.lol/summoner/4/${servers[server]}/${summonerName.split(" ").join("")}`);
        if (!profileResponse.status === 200) throw new Error("Couldn't fetch hat profile");
        const { aid } = await profileResponse.json();

        const gamesResponse = await fetch(`https://red.op.lol/stats/single/1/${servers[server]}/${aid}/`);
        if (!gamesResponse.status === 200) throw new Error("Couldn't fetch ranked stats for that profile");
        const gamesStats = await gamesResponse.json();

        payload.stats = {};

        if (gamesStats["90"].hasOwnProperty("420")) {
            payload.stats = gamesStats["90"]["420"]?.champions.ALL;
        }

        res.status(200).json(payload);

    } catch (err) {
        // Catch errors and send it as Not Found
        res.status(404).json(err.message);
    }
});

module.exports = router;