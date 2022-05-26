// MongoDB User schema
const User = require("../../models/User");

const getUserFromDB = async (identifier) => {
    return await User.findOne(identifier);
};

module.exports = getUserFromDB;