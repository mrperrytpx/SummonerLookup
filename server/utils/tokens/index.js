const {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
} = require("./tokens");

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
    verifyOptions: require("./verifyOptions"),
    signingOptions: require("./signingOptions"),
};
