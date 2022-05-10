const express = require('express');
const router = express.Router();

const { loginRoute, freshTokensRoute, registerRoute } = require("./routes/auth");

router.use("/login", loginRoute);
router.use("/refresh_token", freshTokensRoute);
router.use("/register", registerRoute);

module.exports = router;