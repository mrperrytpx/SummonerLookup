const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Validation import for the register form
const registerValidation = require("../validations/registerValidation");

// MongoDB User schema
const User = require("../model/User");

router.post("/", async (req, res) => {
    // Validating info
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    // Check if the user already exists in the DB
    const emailExists = await User.findOne({
        email: req.body.email
    });
    if (emailExists) return res.status(400).json("Email already exists");

    // Hashing the password
    const passwordSalt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, passwordSalt);

    // Creating the user model
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;