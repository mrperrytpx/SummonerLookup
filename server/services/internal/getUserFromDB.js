// MongoDB User schema
const User = require("../../models/User");

const getUserFromDB = async (username) => {
    return await User.findOne(username);
};

module.exports = getUserFromDB;