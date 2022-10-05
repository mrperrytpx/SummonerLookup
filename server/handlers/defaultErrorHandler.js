const ApiError = require("../utils/ApiError");

const defaultErrorHandler = (req, _res, next) => {
    const err = new ApiError("Not found", 404, req.url);
    console.log("Default error controller");
    next(err);
};

module.exports = defaultErrorHandler;