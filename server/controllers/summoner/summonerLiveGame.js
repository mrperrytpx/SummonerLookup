const { getSummonerLiveGame } = require("../../services/external/");

const summonerLiveGame = async (req, res) => {

	const { server, id } = req.params;

	const liveGameData = await getSummonerLiveGame(server, id);

	res.status(200).json(liveGameData);

};

module.exports = summonerLiveGame;