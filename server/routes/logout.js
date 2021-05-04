const router = require("express").Router();

const User = require("../model/User");

router.post("/", async (req, res) => {
    try {
        const { _id } = req.user;
        await User.updateOne({ _id: _id }, {"$unset" : { refreshToken: "" }});
    } catch(err) {
        res.send({
            error: `${err.message}`
        });
    }
    res.clearCookie('slup', { path: '/refresh_token' });
    return res.send({
      message: 'Logged out',
    });
})

module.exports = router;