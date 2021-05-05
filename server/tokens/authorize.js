const { verify } = require("jsonwebtoken");

module.exports = function (req, res, next) {
    try {
        const token = req?.headers?.authorization.split(" ")[1];
        if (!token) throw new Error("Access Denied");

        const verified = verify(token, process.env.JWT_ACCESS_SECRET);
        if (!verified) throw new Error("Access Denied");

        req.user = verified;
        next();
    } catch(err) {
        res.send({
            error: `${err.message}`
        })
    }
}