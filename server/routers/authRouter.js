const router = require("express").Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/authMiddleware");
const rateLimiter = require("../middlewares/rateLimiter");
const { asyncHandler } = require("../handlers");

router.post("/login", rateLimiter, asyncHandler(authController.loginRoute));
router.post("/register", rateLimiter, asyncHandler(authController.registerRoute));
router.post("/refresh_token", rateLimiter, asyncHandler(authController.refreshTokenRoute));
router.post("/logout", rateLimiter, authMiddleware, asyncHandler(authController.logoutRoute));

module.exports = router;