const router = require('express').Router();

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const summonerRouter = require("./routers/summonerRouter");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/summoner", summonerRouter);


module.exports = router;