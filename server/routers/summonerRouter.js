const router = require("express").Router();
const summonerController = require("../controllers/summoner");
const authMiddleware = require("../middlewares/authMiddleware");

router.use("/follow_summoner", authMiddleware, summonerController.followSummonerRoute);
router.use("/unfollow_summoner", authMiddleware, summonerController.unfollowSummonerRoute);

router.use("/live_game", summonerController.summonerLiveGameRoute);
router.use("/match_details", summonerController.summonerMatchDetailsRoute);

router.use("/search_summoner", summonerController.searchSummonerRoute);
router.use("/champion_stats/", summonerController.summonerChampionStatsRoute);
router.use("/matches/", summonerController.summonerMatchesRoute);
router.use("/ranked_stats/", summonerController.summonerRankedStatsRoute);

module.exports = router;