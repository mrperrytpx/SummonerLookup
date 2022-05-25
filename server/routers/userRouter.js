const router = require("express").Router();
const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");

router.use("/me", authMiddleware, userController.userProfileRoute);
router.use("/delete_user", authMiddleware, userController.deleteUserRoute);

module.exports = router;