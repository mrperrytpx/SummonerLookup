const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Validation import for the register form
const loginValidation = require("../validations/loginValidation");

// MongoDB User schema
const User = require("../model/User");

router.post("/", async (req, res) => {
    // Validating info
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    // Fetch the user if it exists in the DB
    const user = await User.findOne({
        username: req.body.username
    });
    if (!user) return res.status(400).json("Invalid Username"); 
    
    // CONFIRM BY EMAIL - TBD
    // if (!user.confirmed) return res.status(400).json("Please confirm your email to login");

    // Check if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).json("Invalid Password");

    // Create a JWT
    const accessToken = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "15m"
    });

    res.cookie("slup", accessToken).json(accessToken);
})

module.exports = router;