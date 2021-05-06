const router = require("express").Router();

// MongoDB User schema
const User = require("../model/User");

router.delete("/", async (req, res) => {
    try {
        const { _id } = req.user; // Get the _id from request.user which was set in the authorize middleware
        await User.deleteOne({ _id: _id }); // Delete the user with the _id: _id
        res.send({message: "User successfully deleted"}); // Send success
    } catch(err) {
        // Send the error
        res.send({
            err: `${err.message}`
        });
    }    
});

module.exports = router;