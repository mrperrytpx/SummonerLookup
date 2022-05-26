const User = require("../../models/User");

const createNewUser = async (req, hashedPassword) => {
    // Setting the information to a new User document
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
    });

    // Insert the user into the DB
    await newUser.save();
    return;
};

module.exports = createNewUser;
