const fetch = require("node-fetch");
const router = require("express").Router();

router.get("/:region/:id", async (req, res) => {
    const { id, region } = req.params;
    
    try {
        const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${process.env.RIOT_API}`;
        const response = await fetch(url);
        if (!response.status === 200) throw new Error("Invalid Match");

        const matchData = await response.json();
        
        res.status(200).json(matchData);
     } catch(err) {
        res.send(404).json(err);
    }
})

module.exports = router;