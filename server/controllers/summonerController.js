const router = require("express").Router();
const summonerRoutes = require("../routes/summoner");
const { authMiddleware } = require("../utils");

router.use("/follow_summoner", authMiddleware, summonerRoutes.followSummonerRoute);
router.use("/unfollow_summoner", authMiddleware, summonerRoutes.unfollowSummonerRoute);
router.use("/search_summoner", summonerRoutes.searchSummonerRoute);

router.use("/live_game", summonerRoutes.summonerLiveGameRoute);
router.use("/match_details", summonerRoutes.summonerMatchDetailsRoute);

router.use("/champion_stats/", summonerRoutes.summonerChampionStatsRoute);
router.use("/matches/", summonerRoutes.summonerMatchesRoute);
router.use("/ranked_stats/", summonerRoutes.summonerRankedStatsRoute);

module.exports = router;