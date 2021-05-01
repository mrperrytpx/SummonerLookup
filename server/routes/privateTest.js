const router = require("express").Router();
const User = require("../model/User");

const verify = require("../verifytoken");

router.get("/", verify, async (req, res) => {
    const { _id } = req.user;

    const user = await User.findOne({
        _id: _id
    })

    res.json(user);
})

module.exports = router;