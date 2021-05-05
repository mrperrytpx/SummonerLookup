const router = require("express").Router();

const User = require("../model/User");

router.delete("/", async (req, res) => {
    try {
        const { _id } = req.user;
        await User.deleteOne({ _id: _id });
        res.send({message: "User successfully deleted"});
    } catch(err) {
        res.send({
            err: `${err.message}`
        });
    }    
});

module.exports = router;