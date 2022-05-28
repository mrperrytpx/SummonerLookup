const ApiError = require("../utils/ApiError");

const defaultErrorHandler = (_req, _res, next) => {
    const err = new ApiError("Not found", 404);
    console.log("default error controller");
    next(err);
};

module.exports = defaultErrorHandler;