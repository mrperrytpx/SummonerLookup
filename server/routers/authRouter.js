const router = require("express").Router();
const authController = require("../controllers/auth");

router.use("/login", authController.loginRoute);
router.use("/logout", authController.logoutRoute);
router.use("/register", authController.registerRoute);
router.use("/refresh_token", authController.refreshTokenRoute);

module.exports = router;