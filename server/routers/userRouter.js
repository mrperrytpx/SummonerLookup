const router = require("express").Router();

const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/authMiddleware");
const rateLimiter = require("../middlewares/rateLimiter");
const { asyncHandler } = require("../handlers");

router.get("/me", rateLimiter, authMiddleware, asyncHandler(userController.userProfileRoute));
router.delete("/delete_account", rateLimiter, authMiddleware, asyncHandler(userController.deleteAccountRoute));

module.exports = router;