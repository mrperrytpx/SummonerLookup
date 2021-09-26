const defaultErrorHandler = (_req, _res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
}

const errorHandler = (err, _req, res, _next) => {
    res.status(err.status || 500).send({ message: err.message || "Something went wrong" });
}

module.exports = { defaultErrorHandler, errorHandler }