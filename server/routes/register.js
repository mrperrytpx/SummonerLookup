const router = require("express").Router();
const { hash, genSalt } = require("bcryptjs");

// Validation import for the register form
const registerValidation = require("../user_validations/registerValidation");

// MongoDB User schema
const User = require("../model/User");

router.post("/", async (req, res) => {
    // Validating info
    try {
        const { error } = registerValidation(req.body);
        if (error) throw new Error(`${error.details[0].message}`);

        // Check if the user already exists in the DB
        const emailExists = await User.findOne({
            email: req.body.email
        });
        if (emailExists) throw new Error("User already exists");

        // Hashing the password
        const passwordSalt = await genSalt(12);
        const hashedPassword = await hash(req.body.password, passwordSalt);

        // Creating the user model
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            following: [
                {
                    server: "KR",
                    summonerName: "Dick", 
                    summonerID: 2931200921
                },
                {
                    server: "TR",
                    summonerName: "Perky", 
                    summonerID: 23890123021
                },
                {
                    server: "EUW",
                    summonerName: "HELLO YO", 
                    summonerID: 87947214821
                },
            ]
        });

        // Insert the user into the DB
        await user.save();
        res.send({ message: "User created" });
    } catch (err) {
        res.status(400).send({
            error: `${err.message}`
        });
    }
});

module.exports = router;