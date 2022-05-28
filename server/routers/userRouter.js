const router = require("express").Router();

const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");
const { asyncHandler } = require("../handlers");

router.get("/me", authMiddleware, asyncHandler(userController.userProfileRoute));
router.delete("/delete_account", authMiddleware, asyncHandler(userController.deleteAccountRoute));

module.exports = router;