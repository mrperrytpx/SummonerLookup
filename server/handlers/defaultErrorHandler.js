const ApiError = require("../utils/ApiError");

const defaultErrorHandler = (req, _res, next) => {
    const err = new ApiError("Not found", 404, req.url);
    console.log("Default error controller");
    console.log("METHOD: ", req.method);
    next(err);
};

module.exports = defaultErrorHandler;
