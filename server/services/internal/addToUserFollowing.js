const User = require("../../models/User");

const addToUserFollowing = async (id, body) => {
    return await User.updateOne({ _id: id }, { "$push": { following: body } });
};

module.exports = addToUserFollowing;