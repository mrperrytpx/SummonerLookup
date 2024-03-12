const { getUserFromDB } = require("../../services/internal/");

const userProfile = async (req, res) => {
    const { _id } = req.user;

    // get the array of followers the user follows from the DB
    const { following } = await getUserFromDB({ _id: _id });

    res.json(following);
};

module.exports = userProfile;

/**
 * @openapi
 * components:
 *  schemas:
 *    FollowingObject:
 *      allOf:
 *      - $ref: "#/components/schemas/SummonerResponse"
 *      - type: object
 *        properties:
 *          _id:
 *            type: string
 *          followedAt:
 *            type: string
 *            format: date-time
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    FollowingResponse:
 *      type: array
 *      items:
 *        type: object
 *        $ref: "#/components/schemas/FollowingObject"
 */
