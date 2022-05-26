const router = require("express").Router();

const { asyncHandler } = require("../../handlers");
const { getSummonerAccountData } = require("../../services/external");

router.get("/:region/:server/:summonerName/", asyncHandler(async (req, res) => {
	const { region, server, summonerName } = req.params;
	const notSpacedSummoner = summonerName.split(" ").join("%20");
	let payload = {};

	const accountData = await getSummonerAccountData(server, notSpacedSummoner);
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
}));

module.exports = router;