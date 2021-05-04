const router = require("express").Router();

router.get("/", (req, res) => {
    res.json(req?.user?._id)
})

module.exports = router;