const router = require("express").Router();
const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/authMiddleware");

router.use("/login", authController.loginRoute);
router.use("/register", authController.registerRoute);
router.use("/refresh_token", authController.refreshTokenRoute);
router.use("/logout", authMiddleware, authController.logoutRoute);

module.exports = router;