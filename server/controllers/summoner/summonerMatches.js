// const summonerSpells = require("../../static/summonerSpellIds");
// const runes = require("../../static/runeIds");
const { getSummonerMatches, getMatch } = require("../../services/external/");
const leagueRegion = require("../../utils/leagueRegion");

const summonerMatches = async (req, res) => {
    const { server, puuid } = req.params;
    const region = leagueRegion(server);
    let payload = [];
    // Fetch the match IDs
    const matchIds = await getSummonerMatches(region, puuid);
    // Fetch each match
    let matchResponses = await Promise.allSettled(matchIds.map(game => getMatch(region, game)));
    // Filter out rejects
    const matchesData = matchResponses.filter(match => match.status === "fulfilled");

    // Convert each match to json data
    // const gameData = await Promise.allSettled(matchResponses.map(res => res.json()));
    res.json(matchesData);
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
};

module.exports = summonerMatches;