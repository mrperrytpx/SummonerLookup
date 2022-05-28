const { getMatch } = require("../../services/external");

const summonerMatchDetails = async (req, res) => {
	const { region, id } = req.params;

	const matchData = await getMatch(region, id);

	res.status(200).json(matchData);
};

module.exports = summonerMatchDetails;