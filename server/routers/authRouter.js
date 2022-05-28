const router = require("express").Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/authMiddleware");
const { asyncHandler } = require("../handlers");

router.post("/login", asyncHandler(authController.loginRoute));
router.post("/register", asyncHandler(authController.registerRoute));
router.post("/refresh_token", asyncHandler(authController.refreshTokenRoute));
router.post("/logout", authMiddleware, asyncHandler(authController.logoutRoute));

module.exports = router;