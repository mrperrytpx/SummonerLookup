const router = require("express").Router();
const { verify } = require("jsonwebtoken");

router.post("/", (req, res) => {
    try {
        // Checking if the user already has a valid access token to prevent them from going to /login path etc.
        const token = req?.headers?.authorization.split(" ")[1]; // Grab the token from request headers
        // If the token is 'undefined', user isn't logged in so we allow
        if (token === "undefined") throw new Error("Allowed");

        // try to verify the token
        const verified = verify(token, process.env.JWT_ACCESS_SECRET); // Try to verify the JWT token

        // If the token isn't verified, user isn't logged in so we allow
        if (!verified) throw new Error("Allowed");

        // If token is verified, user is logged in so we don't allow
        res.send({ message: "Already logged in" });
    } catch (err) {
        // Send the error
        res.send({
            err: `${err.message}`
        });
    }
});

module.exports = router;