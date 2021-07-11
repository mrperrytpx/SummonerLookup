const router = require("express").Router();

const User = require("../model/User");

router.patch("/", async (req, res) => {
    const { id } = req.body;
    try {
        const { following } = await User.findOne({
            _id: req?.user?._id
        });
        const updatedFollowing = following.filter(player => player._id.toString() !== id);
        console.log(updatedFollowing)

    } catch (error) {
        res.json({ message: "yo" })
    }
})

module.exports = router;