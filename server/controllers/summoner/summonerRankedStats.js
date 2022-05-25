const router = require("express").Router();
const fetch = require("node-fetch");
const { asyncHandler } = require("../../handlers/");

router.get("/:server/:id", asyncHandler(async (req, res) => {

    const { server, id } = req.params;

    const rankedUrl = `https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.RIOT_API}`;
    console.log(rankedUrl);
    const rankedStandingResponse = await fetch(rankedUrl);
    if (!rankedStandingResponse.ok) throw new Error("Uhh riot's having issues it seems");
    const rankedStanding = await rankedStandingResponse.json();

    res.json(rankedStanding);
}));

module.exports = router;