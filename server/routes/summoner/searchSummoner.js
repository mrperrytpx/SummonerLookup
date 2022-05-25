const router = require("express").Router();
const fetch = require("node-fetch");

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

		res.json(payload);

	} catch (err) {
		// Catch errors and send it as Not Found
		res.sendStatus(404);
	}
});

module.exports = router;