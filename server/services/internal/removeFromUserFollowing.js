const User = require("../../models/User");

const removeFromUserFollowing = async (userId, followingId) => {
    return await User.updateOne({ _id: userId }, { "$pull": { following: { _id: followingId } } });
};

module.exports = removeFromUserFollowing;