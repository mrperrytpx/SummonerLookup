const verifyOptions = {
    issuer: "Summoner Lookup",
    audience: process.env.WEBSITE_URL,
    algorithm: ["RS256"]
};

module.exports = verifyOptions;