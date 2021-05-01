const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {

    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token) return res.status(401).json("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json("Invalid token");
        return;
    }
}