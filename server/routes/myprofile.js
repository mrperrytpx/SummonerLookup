const router = require("express").Router();

// MongoDB User schema
const User = require("../model/User");

router.get("/", async (req, res) => {
    // destructure _id from request.user
    const { _id } = req.user;
    try {
        // get the array of followers the user follows from the DB
        const { following } = await User.findOne({ _id: _id})
        // send the array to the frontend
        res.send({following: following});
    } catch(err) {
        res.send({
            error: `${err.message}`
        });
    }
})

module.exports = router;