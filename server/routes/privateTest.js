const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../model/User");

router.get("/", async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    
    const { _id } = jwt.verify(token, process.env.JWT_ACCESS_SECRET)

    const user = await User.findOne({
        _id: _id
    })
    
    res.json(user);
})

module.exports = router;