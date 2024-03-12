const User = require("../../models/User");

const deleteUser = async (identifier) => {
    return await User.deleteOne(identifier);
};

module.exports = deleteUser;
