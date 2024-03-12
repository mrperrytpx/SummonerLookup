const {
    getUserFromDB,
    removeFromUserFollowing,
} = require("../../services/internal");

const unfollowSummoner = async (req, res) => {
    // Get the ID from request body
    const { id } = req.body;

    // try to find a user which was put into req.user in the authorization middleware
    const user = await getUserFromDB({ _id: req?.user?._id });
    // If the player isn't following, throw an error
    if (!user.following.find((summoner) => summoner.summonerId == id)) {
        throw new Error("Not following that player");
    }
    // Update the following array to remove the player with the same document ID
    await removeFromUserFollowing(user?._id, id);
    res.sendStatus(204);
};

module.exports = unfollowSummoner;
