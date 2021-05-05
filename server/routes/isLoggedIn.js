const router = require("express").Router();
const { verify } = require("jsonwebtoken");

router.post("/", (req, res) => {
    try {
        const token = req?.headers?.authorization.split(" ")[1];
        const verified = verify(token, process.env.JWT_ACCESS_SECRET);

        if (token !== "undefined" || verified) return res.send({message: "Already logged in"});

        throw new Error("Not logged in");
    } catch (err) {
        res.send({
            err: `${err.message}`
        });
    }
});

module.exports = router;