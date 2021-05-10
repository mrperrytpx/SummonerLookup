const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/:region/:server/:summonerName/", async (req, res) => {
    const { region, server, summonerName } = req.params;
    console.log(region, server, summonerName);
    try {
        // Fetch account data to get the account ID
        const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API}`;
        const accountData = await(await fetch(accountUrl)).json();
        if (!accountData) throw new Error("Account not found");
        const accountId = accountData.accountId;

        // Fetch the matches data of the account ID
        const matchesUrl = `https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${process.env.RIOT_API}`
        const matchesData = await(await fetch(matchesUrl)).json();
        console.log(matchesData);
        if (!matchesData) throw new Error("No matches on the account");

        // Fetch the last played game on the account
        const gameId = matchesData.matches[0].gameId;
        const gameUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${server.toUpperCase()}_${gameId}?api_key=${process.env.RIOT_API}`;
        const gameData = await (await fetch(gameUrl)).json();
        res.status(200).send({when: gameData.info.gameCreation});
    } catch (err) {
        res.status(404).json(err.message);
    }
});

module.exports = router;