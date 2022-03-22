const defaultErrorHandler = (_req, _res, next) => {
    console.log("default error controller");
    const error = new Error("Not found");
    error.status = 404;
    next(error);
};

module.exports = defaultErrorHandler;