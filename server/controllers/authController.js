const router = require("express").Router();
const authRoutes = require("../routes/auth");
const { authMiddleware } = require("../utils");

router.use("/login", authRoutes.loginRoute);
router.use("/logout", authRoutes.logoutRoute);
router.use("/register", authRoutes.registerRoute);
router.use("/refresh_token", authRoutes.refreshTokenRoute);

module.exports = router;