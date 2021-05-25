const router = require("express").Router();

router.post("/", async (req, res) => {
    console.log(req.body);
    res.send("Yo we out here");
})

module.exports = router;