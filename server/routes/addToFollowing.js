const router = require("express").Router();

const User = require("../model/User");

router.post("/", async (req, res) => {
    try {
        // Find a user with the same _id as provided in the JWT Access Token
        const user = await User.findOne({
            _id: req?.user?._id
        });
        // If the user is already 'following' a summoner, throw an error so it doesn't 'follow' agian
        if (user.following.find(summoner => summoner.puuid === req.body.puuid)) {
            throw new Error("Already following");
        }
        // Update user's following list with the summoner information
        await User.updateOne({ _id: user._id }, { "$push": { following: req.body } })

        res.sendStatus(204);
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;