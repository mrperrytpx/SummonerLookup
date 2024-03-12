const User = require("../../models/User");

const updateUserRefreshToken = async (id, refreshToken) => {
    return await User.updateOne(
        { _id: id },
        { $set: { refreshToken: refreshToken } }
    );
};

module.exports = updateUserRefreshToken;
