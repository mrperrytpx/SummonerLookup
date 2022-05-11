const router = require('express').Router();

const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const summonerController = require("./controllers/summonerController");

router.use("/auth", authController);
router.use("/user", userController);
router.use("/summoner", summonerController);


module.exports = router;