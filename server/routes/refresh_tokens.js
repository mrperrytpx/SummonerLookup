const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const { createAccessToken,
    createRefreshToken,
    sendRefreshToken
} = require("../tokens/tokens");
const User = require("../model/User");

router.post('/', async (req, res) => {

    const token = req.cookies.slup;
    // If we don't have a token in our request
    if (!token) return res.send({ accesstoken: '' });
    // Verify the refresh token
    let payload = null;
    try {
      payload = verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.send({ accesstoken: '' });
    }

    // Find a user with the refresh token ID
    const user = await User.findOne({
      _id: payload._id
    });

    // If there isn't a user
    if(!user) return res.send({ accesstoken: '' });

    // If the user doesn't have the same refresh token as the recieved token
    if (user.refreshToken !== token) return res.send({ accesstoken: '' });

    // Send tokens to the user
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    // Update users refresh token in the DB
    await User.updateOne({ _id: user._id }, {"$set": { refreshToken: refreshToken }});

    sendRefreshToken(res, refreshToken);
    return res.send({ accessToken });
  });

module.exports = router;