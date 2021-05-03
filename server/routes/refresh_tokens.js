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

    console.log(user);
    console.log(token);

    if(!user) return res.send({ accesstoken: '' });
    if (user.refreshToken !== token) return res.send({ accesstoken: '' });

    // Send tokens to the user
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);

    await User.findOneAndUpdate({ _id: user._id }, { refreshToken: refreshToken });

    sendRefreshToken(res, refreshToken);
    return res.send({ accessToken });
  });

module.exports = router;