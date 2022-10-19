const router = require("express").Router();

const summonerController = require("../controllers/summoner");
const authMiddleware = require("../middlewares/authMiddleware");
const { asyncHandler } = require("../handlers");

router.post("/follow_summoner", authMiddleware, asyncHandler(summonerController.followSummonerRoute));
router.patch("/unfollow_summoner", authMiddleware, asyncHandler(summonerController.unfollowSummonerRoute));

router.get("/search_summoner/:server/:summonerName/", asyncHandler(summonerController.searchSummonerRoute));
router.get("/live_game/:server/:id/", asyncHandler(summonerController.summonerLiveGameRoute));

router.get("/matches/:server/:puuid/:page", asyncHandler(summonerController.summonerMatchesRoute));
router.get("/match_details/:id", asyncHandler(summonerController.summonerMatchDetailsRoute));
router.get("/challenges/:server/:puuid", asyncHandler(summonerController.summonerChallenges));

router.get("/champion_stats/:server/:summonerName", asyncHandler(summonerController.summonerChampionStatsRoute));
router.get("/ranked_stats/:server/:summonerId", asyncHandler(summonerController.summonerRankedStatsRoute));

module.exports = router;