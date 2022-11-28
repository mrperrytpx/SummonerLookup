const router = require("express").Router();

const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");
const rateLimiter = require("../middlewares/rateLimiter");
const { asyncHandler } = require("../handlers");

/**
 * @openapi
 * '/api/user/me':
 *  get:
 *    summary: User account's following data
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - User
 *    parameters:
 *      - name: authorization
 *        in: header
 *        required: true
 *        schema:
 *          $ref: "#/components/securitySchemas/bearerAuth"
 *    responses:
 *      200:
 *        description: Logout successful
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/FollowingResponse"
 *      403:
 *        description: Forbidden
 *      429:
 *        description: Too many requests
 */
router.get("/me", rateLimiter, authMiddleware, asyncHandler(userController.userProfileRoute));

/**
 * @openapi
 * '/api/user/me':
 *  delete:
 *    summary: User account's following data
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - User
 *    parameters:
 *      - name: authorization
 *        in: header
 *        required: true
 *        schema:
 *          $ref: "#/components/securitySchemas/bearerAuth"
 *    responses:
 *      204:
 *        description: Deletion successful
 *      403:
 *        description: Forbidden
 *      429:
 *        description: Too many requests
 */
router.delete("/delete_account", rateLimiter, authMiddleware, asyncHandler(userController.deleteAccountRoute));

module.exports = router;