const router = require("express").Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/authMiddleware");
const rateLimiter = require("../middlewares/rateLimiter");
const { asyncHandler } = require("../handlers");

/**
   * @openapi
   * '/api/auth/login':
   *  post:
   *    tags:
   *      - Auth
   *    summary: User login route
   *    requestBody: 
   *      required: true
   *      content:
   *        application/json: 
   *          schema: 
   *            $ref: "#/components/schemas/LoginInput" 
   *    responses:
   *      200:
   *        description: Login successful
   *        content:
   *          application/json: 
   *            schema: 
   *              $ref: "#/components/schemas/LoginResponse"
   *      400:
   *        description: Bad Request
   *      404:
   *        description: Not found
   */
router.post("/login", rateLimiter, asyncHandler(authController.loginRoute));
/**
 * @openapi
 * '/api/auth/register':
 *  post:
 *    tags:
 *      - Auth
 *    summary: User register route
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json: 
 *          schema: 
 *            $ref: "#/components/schemas/RegisterInput" 
 *    responses:
 *      201:
 *        description: Register successful
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not found
 *      409:
 *        description: Conflict
 */
router.post("/register", rateLimiter, asyncHandler(authController.registerRoute));
/**
 * @openapi
 * '/api/auth/refresh_token':
 *  post:
 *    summary: Request a new refresh/access token pair
 *    security:
 *      - cookieAuth: []
 *    tags:
 *      - Auth
 *    description: Request new refresh/access token pairs
 *    parameters:
 *      - name: Cookie
 *        in: header
 *        required: true
 *        type: string
 *        schema: 
 *          $ref: "#/components/securitySchemas/cookieAuth"
 *    responses:
 *      200:
*        description: Tokens refreshed
*        content:
*          application/json: 
*            schema: 
*              $ref: "#/components/securitySchemas/cookieAuth"
 */
router.post("/refresh_token", rateLimiter, asyncHandler(authController.refreshTokenRoute));

/**
 * @openapi
 * '/api/auth/logout':
 *  post:
 *    summary: User logout route
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Auth
 *    parameters:
 *      - name: authorization
 *        in: header
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Logout successful
 *      403:
 *        description: Forbidden
 */
router.post("/logout", rateLimiter, authMiddleware, asyncHandler(authController.logoutRoute));

module.exports = router;