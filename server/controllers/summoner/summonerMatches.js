const router = require("express").Router();
const fetch = require("node-fetch");
// const summonerSpells = require("../../static/summonerSpellIds");
// const runes = require("../../static/runeIds");
const { asyncHandler } = require("../../handlers/");

router.get("/:region/:puuid", asyncHandler(async (req, res, next) => {
    const { region, puuid } = req.params;
    let payload = [];
    try {
        // Fetch the match IDs
        const matchesUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.RIOT_API}`;
        // console.log(matchesUrl);
        const matchesResponse = await fetch(matchesUrl);
        if (!matchesResponse.ok) throw new Error("No matches on the account");
        const matchesData = await matchesResponse.json();
        // Fetch each match
        let matchResponses = await Promise.allSettled(matchesData.map(game => {
            const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${game}?api_key=${process.env.RIOT_API}`;
            console.log(gameUrl);
            return fetch(gameUrl);
        }));
        // Filter out rejects
        matchResponses = matchResponses.filter(match => match.status === "fulfilled");

        // Convert each match to json data
        const gameData = await Promise.allSettled(matchResponses.map(res => res.value.json()));
        res.json(gameData);
        // for (let { value: game } of gameData) {
        //     if (game?.status?.status_code === 404) continue;
        //     for (let summoner of game?.info?.participants) {
        //         // If the summoner is the same as requested summoner, set the summoner's data into the payload
        //         if (summoner?.summonerName?.toLowerCase() === summonerName.toLowerCase()) {
        //             let gameDetails = {
        //                 duration: game?.info?.gameDuration,
        //                 matchId: game?.metadata?.matchId,
        //                 championName: summoner.championName,
        //                 championId: summoner.championId,
        //                 summoner1: summonerSpells[summoner.summoner1Id] || summoner.summoner1Id,
        //                 summoner2: summonerSpells[summoner.summoner2Id] || summoner.summoner2Id,
        //                 keystone: runes[summoner.perks.styles[0].selections[0].perk],
        //                 secondary: runes[summoner.perks.styles[1].style],
        //                 items: [summoner.item0, summoner.item1, summoner.item2, summoner.item3, summoner.item4, summoner.item5, summoner.item6],
        //                 kills: summoner.kills,
        //                 assists: summoner.assists,
        //                 deaths: summoner.deaths,
        //                 win: summoner.win
        //             };
        //             payload.push(gameDetails);
        //         }
        //     }
    } catch (err) {
        next(err);
    }
}));

module.exports = router;