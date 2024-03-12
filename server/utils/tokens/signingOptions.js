const signingOptions = (username, exp) => {
    const iss = "Summoner Lookup";
    const sub = username;
    const aud = process.env.WEBSITE_URL;

    const signOptions = {
        issuer: iss,
        audience: aud,
        subject: sub,
        expiresIn: exp,
        algorithm: "RS256",
    };
    return signOptions;
};

module.exports = signingOptions;
