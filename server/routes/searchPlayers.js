const router = require("express").Router();
const axios = require("axios");

router.get("/:region/:server/:summonerName/", async (req, res) => {
    const { region, server, summonerName } = req.params;
    console.log(region, server, summonerName);
    try {
        const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API}`;
        const accountData = await axios.get(accountUrl);
        console.log(accountData);
        const accountId = accountData.data.accountId;
        const matchesUrl = `https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${process.env.RIOT_API}`
        const matchesData = await axios.get(matchesUrl);
        const gameId = matchesData.data.matches[0].gameId;
        const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${server.toUpperCase()}_${gameId}?api_key=${process.env.RIOT_API}`;
        const gameData = await axios.get(gameUrl);
        res.status(200).send({when: gameData.data.info.gameCreation})
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;