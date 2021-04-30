const router = require("express").Router();

// MongoDB User schema
const User = require("../model/User");

router.post("/", async (req, res) => {
    console.log(req.body);
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
        console.log("Saved");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;