const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
    return sign(
        { _id: userId },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: "15m" }
    )
}

const createRefreshToken = (userId) => {
    return sign(
        { _id: userId },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    )
}

const sendAccessToken = (res, token) => {
    res.send({ accessToken: token });
}

const sendRefreshToken = (res, token) => {
    res.cookie("slup", token, {
        httpOnly: true,
        path: "/refresh_token"
    });
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}