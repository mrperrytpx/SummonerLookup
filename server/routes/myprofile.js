const router = require("express").Router();

const User = require("../model/User");

router.get("/", async (req, res) => {
    const { _id } = req.user;
    try {
        const { following } = await User.findOne({ _id: _id})
        res.send({following: following});
    } catch(err) {
        res.send({
            error: `${err.message}`
        });
    }
})

module.exports = router;