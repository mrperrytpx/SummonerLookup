const router = require("express").Router();
const userRoutes = require("../routes/user");
const { authMiddleware } = require("../utils");

router.use("/me", authMiddleware, userRoutes.userProfileRoute);
router.use("/delete_user", authMiddleware, userRoutes.deleteUserRoute);

module.exports = router;