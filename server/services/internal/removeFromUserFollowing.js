const User = require("../../models/User");

const removeFromUserFollowing = async (userId, followingId) => {
    return await User.updateOne(
        { _id: userId },
        { $pull: { following: { summonerId: followingId } } }
    );
};

module.exports = removeFromUserFollowing;
