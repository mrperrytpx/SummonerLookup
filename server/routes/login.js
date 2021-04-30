const router = require("express").Router();
const bcrypt = require("bcryptjs");

// Validation import for the register form
const loginValidation = require("../validations/loginValidation");

// MongoDB User schema
const User = require("../model/User");

router.post("/", async (req, res) => {
    // Validating info
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    // Check if the user exists in the DB
    const user = await User.findOne({
        username: req.body.username
    });
    if (!user) return res.status(400).json("Invalid Username");

    // Check if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).json("Invalid Password");

    res.json("Logged in");
})

module.exports = router;