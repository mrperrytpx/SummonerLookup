const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
    // Sign (create) a JWT access token with the user._id, signed with the access_secret .env
    return sign(
        { _id: userId },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: "15m" }
    );
}

const createRefreshToken = (userId) => {
    // Sign (create) a JWT refresh token with the user._id, signed with the refresh_secret .env
    return sign(
        { _id: userId },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    );
}

const sendAccessToken = (res, token) => {
    // Send the access token as a response
    res.send({ accessToken: token });
}

const sendRefreshToken = (res, token) => {
    // send the refresh token as a cookie
    res.cookie("slup", token, {
        httpOnly: true,
        path: "/api/refresh_token"
    });
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}