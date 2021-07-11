const router = require("express").Router()
const fetch = require("node-fetch");

router.get("/:server/:summonerName/", async (req, res) => {
    const { server, summonerName } = req.params;
    const notSpacedSummoner = summonerName.split(" ").join("%20");

    try {
        // Fetch account data to get the ID for the next fetch
        const accountUrl = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${notSpacedSummoner}?api_key=${process.env.RIOT_API}`;
        const accountResponse = await fetch(accountUrl);
        if (!accountResponse.ok) throw new Error("Account not found");
        const accountData = await accountResponse.json();

        // Fetch live game data
        const liveGameUrl = `https://${server}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${accountData.id}?api_key=${process.env.RIOT_API}`
        const liveGameResponse = await fetch(liveGameUrl);
        // Just assuming the server works always to send the proper error to the front end
        if (!liveGameResponse.ok) throw new Error("Player isn't currently in a game");
        const liveGameData = await liveGameResponse.json();

        res.status(200).json(liveGameData);

    } catch (error) {
        res.sendStatus(404);
    }
})

module.exports = router