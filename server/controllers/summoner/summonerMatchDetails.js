const { getMatch } = require("../../services/external");
const leagueRegion = require("../../utils/leagueRegion");

const summonerMatchDetails = async (req, res) => {
	const { id } = req.params;
	const server = id.split("_")[0];
	const region = leagueRegion(server);

	const matchData = await getMatch(region, id);

	res.status(200).json(matchData);
};

module.exports = summonerMatchDetails;