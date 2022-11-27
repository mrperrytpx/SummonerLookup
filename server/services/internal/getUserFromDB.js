// MongoDB User schema
const User = require("../../models/User");

const getUserFromDB = async (identifier) => {
    const user = await User.findOne(identifier);
    return user;
};

module.exports = getUserFromDB;