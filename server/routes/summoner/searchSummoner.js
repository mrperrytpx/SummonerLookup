const router = require("express").Router();
const fetch = require("node-fetch");
const summonerSpells = require("../../static/summonerSpellIds");
const runes = require("../../static/runeIds");

router.get("/:region/:server/:summonerName/", async (req, res) => {
	const { region, server, summonerName } = req.params;
	const notSpacedSummoner = summonerName.split(" ").join("%20");
	let payload = {};

	try {
		// Fetch account data to get the account ID
		const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${notSpacedSummoner}?api_key=${process.env.RIOT_API}`;
		const accountResponse = await fetch(accountUrl);
		if (!accountResponse.ok) throw new Error("Account not found");
		const accountData = await accountResponse.json();

		// Set the necessary account data into the payload
		payload.accountData = {
			server: server,
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
		const matchesResponse = await fetch(matchesUrl);
		if (!matchesResponse.ok) throw new Error("No matches on the account");
		const matchesData = await matchesResponse.json();
		// Fetch each match
		let matchResponses = await Promise.allSettled(matchesData.map(game => {
			const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${game}?api_key=${process.env.RIOT_API}`;
			return fetch(gameUrl);
		}));
		// Filter out rejects
		matchResponses = matchResponses.filter(match => match.status === "fulfilled");
		// Convert each match to json data
		const gameData = await Promise.allSettled(matchResponses.map(res => res.value.json()));
		for (let { value: game } of gameData) {
			if (game?.status?.status_code === 404) continue;
			for (let summoner of game?.info?.participants) {
				// If the summoner is the same as requested summoner, set the summoner's data into the payload
				if (summoner?.summonerName?.toLowerCase() === summonerName.toLowerCase()) {
					let gameDetails = {
						duration: game?.info?.gameDuration,
						matchId: game?.metadata?.matchId,
						championName: summoner.championName,
						championId: summoner.championId,
						summoner1: summonerSpells[summoner.summoner1Id] || summoner.summoner1Id,
						summoner2: summonerSpells[summoner.summoner2Id] || summoner.summoner2Id,
						keystone: runes[summoner.perks.styles[0].selections[0].perk],
						secondary: runes[summoner.perks.styles[1].style],
						items: [summoner.item0, summoner.item1, summoner.item2, summoner.item3, summoner.item4, summoner.item5, summoner.item6],
						kills: summoner.kills,
						assists: summoner.assists,
						deaths: summoner.deaths,
						win: summoner.win
					};
					payload.games.push(gameDetails);
				}
			}
		}

		// Fetch summoner's ranked stats
		const rankedUrl = `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountData.id}?api_key=${process.env.RIOT_API}`;
		const rankedStandingResponse = await fetch(rankedUrl);
		if (!rankedStandingResponse.ok) throw new Erorr("Uhh riot's having issues it seems");
		const rankedStanding = await rankedStandingResponse.json();
		// If it doesn't return an empty array, set the ranked property
		// otherwise there won't be a .ranked property on the payload object
		if (rankedStanding.length) {
			// Set the ranked stats data into the payload
			payload.ranked = {
				tier: rankedStanding[0].tier,
				division: rankedStanding[0].rank,
				LP: rankedStanding[0].leaguePoints,
				wins: rankedStanding[0].wins,
				losses: rankedStanding[0].losses,
			};
		}
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
		if (!statsResponse.ok) throw new Error("U.GG Might be having issues");
		const statsData = await statsResponse.json();
		payload.stats = statsData.data.fetchPlayerStatistics[0].basicChampionPerformances;

		res.status(200).json(payload);

	} catch (err) {
		// Catch errors and send it as Not Found
		res.sendStatus(404);
	}
});

module.exports = router;