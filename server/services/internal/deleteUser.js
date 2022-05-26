const User = require("../../models/User");

const deleteUser = async (id) => {
    return await User.deleteOne({ _id: id });
};

module.exports = deleteUser;