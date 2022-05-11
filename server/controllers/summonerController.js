const router = require("express").Router();
const summonerRoutes = require("../routes/summoner");
const { authMiddleware } = require("../utils");

router.use("/follow_summoner", authMiddleware, summonerRoutes.followSummonerRoute);
router.use("/unfollow_summoner", authMiddleware, summonerRoutes.unfollowSummonerRoute);
router.use("/search_summoner", summonerRoutes.searchSummonerRoute);

router.use("/summoner_live_game", summonerRoutes.summonerLiveGameRoute);
router.use("/summoner_match_details", summonerRoutes.summonerMatchDetailsRoute);

module.exports = router;