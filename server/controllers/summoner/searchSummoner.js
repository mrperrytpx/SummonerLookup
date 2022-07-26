const { getSummonerAccountData } = require("../../services/external");
const leagueRegion = require("../../utils/leagueRegion");

const searchSummoner = async (req, res) => {
	const { server, summonerName } = req.params;
	const region = leagueRegion(server);
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
};

module.exports = searchSummoner;