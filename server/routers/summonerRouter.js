const router = require("express").Router();

const summonerController = require("../controllers/summoner");
const authMiddleware = require("../middlewares/authMiddleware");
const rateLimiter = require("../middlewares/rateLimiter");
const { asyncHandler } = require("../handlers");
/**
   * @openapi
   * '/api/summoner/follow_summoner':
   *  post:
   *    tags:
   *      - Summoner
   *    summary: Add a summoner object to the list of following in DB
   *    parameters:
   *      - name: authorization
   *        in: header
   *        required: true
   *        schema:
   *          $ref: "#/components/securitySchemas/bearerAuth"
   *    requestBody: 
   *      required: true
   *      content:
   *        application/json: 
   *          schema: 
   *            type: object
   *            required: puuid
   *            properties:
   *              puuid:
   *                type: string
   *    responses:
   *      204:
   *        description: Summoner successfully followed
   *      400:
   *        description: Bad Request
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.post("/follow_summoner", rateLimiter, authMiddleware, asyncHandler(summonerController.followSummonerRoute));

/**
   * @openapi
   * '/api/summoner/unfollow_summoner':
   *  patch:
   *    tags:
   *      - Summoner
   *    summary: Remove a summoner object to the list of following in DB
   *    parameters:
   *      - name: authorization
   *        in: header
   *        required: true
   *        schema:
   *          $ref: "#/components/securitySchemas/bearerAuth"
   *    requestBody: 
   *      required: true
   *      content:
   *        application/json: 
   *          schema: 
   *            type: object
   *            required: true
   *            description: Summoner Id
   *            properties:
   *              id:
   *                type: string
   *    responses:
   *      204:
   *        description: Summoner successfully followed
   *      400:
   *        description: Bad Request
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.patch("/unfollow_summoner", rateLimiter, authMiddleware, asyncHandler(summonerController.unfollowSummonerRoute));

/**
   * @openapi
   * /api/summoner/search_summoner/{server}/{summonerName}:
   *  get:
   *    tags:
   *      - Summoner
   *    summary: Get data about the Summoner from Riot's API
   *    parameters:
   *      - name: server
   *        in: path
   *        required: true
   *        type: string
   *        description: Server string
   *      - name: summonerName
   *        in: path
   *        required: true
   *        type: string
   *        description: Summoner name
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/SummonerResponse"
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.get("/search_summoner/:server/:summonerName/", asyncHandler(summonerController.searchSummonerRoute));

/**
   * @openapi
   * /api/summoner/live_game/{server}/{id}:
   *  get:
   *    tags:
   *      - Summoner
   *    summary: Get data about a live game
   *    parameters:
   *      - name: server
   *        in: path
   *        required: true
   *        type: string
   *        description: Server string
   *      - name: summonerId
   *        in: path
   *        required: true
   *        type: string
   *        description: SummonerId
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/LiveGameResponse"
   *      404:
   *        description: Not in a live game
   *      429:
   *        description: Too many requests
   */
router.get("/live_game/:server/:summonerId/", asyncHandler(summonerController.summonerLiveGameRoute));

/**
   * @openapi
   * /api/summoner/matches/{server}/{puuid}/{page}:
   *  get:
   *    tags:
   *      - Summoner
   *    externalDocs:
   *      description: Riot's Match v5 documentation for a single match
   *      url: https://developer.riotgames.com/apis#match-v5/GET_getMatch
   *    summary: Array of match datas
   *    parameters:
   *      - name: server
   *        in: path
   *        required: true
   *        type: string
   *        description: Server string
   *      - name: puuid
   *        in: path
   *        required: true
   *        type: string
   *        description: Summoner puuid
   *      - name: page
   *        in: path
   *        required: true
   *        type: string
   *        description: Arbitrary page for infinite query
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/MatchesResponse"
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.get("/matches/:server/:puuid/:page", asyncHandler(summonerController.summonerMatchesRoute));

/**
   * @openapi
   * /api/summoner/match_details/{matchId}:
   *  get:
   *    tags:
   *      - Summoner
   *    externalDocs:
   *      description: Riot's Match v5 documentation for a single match
   *      url: https://developer.riotgames.com/apis#match-v5/GET_getMatch
   *    summary: Single match data
   *    parameters:
   *      - name: matchId
   *        in: path
   *        required: true
   *        type: string
   *        description: Match ID
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/MatchResponse"
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.get("/match_details/:matchId", asyncHandler(summonerController.summonerMatchDetailsRoute));

/**
   * @openapi
   * /api/summoner/challenges/{server}/{puuid}:
   *  get:
   *    tags:
   *      - Summoner
   *    summary: Summoner challenges data
   *    parameters:
   *      - name: server
   *        in: path
   *        required: true
   *        type: string
   *        description: Server string
   *      - name: puuid
   *        in: path
   *        required: true
   *        type: string
   *        description: Summoner PUUID
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/ChallengesResponse"
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.get("/challenges/:server/:puuid", asyncHandler(summonerController.summonerChallenges));

/**
   * @openapi
   * /api/summoner/champion_stats/{server}/{summonerName}:
   *  get:
   *    tags:
   *      - Summoner
   *    summary: Summoner champion stats in ranked queues
   *    parameters:
   *      - name: server
   *        in: path
   *        required: true
   *        type: string
   *        description: Server string
   *      - name: summonerName
   *        in: path
   *        required: true
   *        type: string
   *        description: Summoner name
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/ChampionStatsResponse"
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.get("/champion_stats/:server/:summonerName", asyncHandler(summonerController.summonerChampionStatsRoute));

/**
   * @openapi
   * /api/summoner/ranked_stats/{server}/{summonerid}:
   *  get:
   *    tags:
   *      - Summoner
   *    summary: Summoner ranked stats in ranked queues (LP, overall wins etc);
   *    parameters:
   *      - name: server
   *        in: path
   *        required: true
   *        type: string
   *        description: Server string
   *      - name: summonerId
   *        in: path
   *        required: true
   *        type: string
   *        description: Summoner ID
   *    responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/RankedStatsResponse"
   *      404:
   *        description: Not found
   *      429:
   *        description: Too many requests
   */
router.get("/ranked_stats/:server/:summonerId", asyncHandler(summonerController.summonerRankedStatsRoute));

module.exports = router;