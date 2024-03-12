const ApiError = require("../utils/ApiError");

const errorHandler = (err, _req, res, _next) => {
    console.log("ERROR:", err);
    if (err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return;
    }
    res.status(500).json("Something went wrong");
};

module.exports = errorHandler;
