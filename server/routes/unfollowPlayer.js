const router = require("express").Router();

const User = require("../model/User");

router.patch("/", async (req, res) => {
    const { id } = req.body;
    try {
        const { following } = await User.findOne({
            _id: req?.user?._id
        });
        following.map(player => console.log(player._id, id, player._id === id));
        // console.log("-----------------------------------------------------")
        // console.log(updatedFollowing);

    } catch (error) {
        res.json({ message: "yo" })
    }
})

module.exports = router;