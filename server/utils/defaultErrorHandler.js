const defaultErrorHandler = (_req, _res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    console.log("default error controller");
    next(err);
};

module.exports = defaultErrorHandler;