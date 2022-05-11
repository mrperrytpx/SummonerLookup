const errorHandler = (err, _req, res, _next) => {
    console.log("entering error handler");
    console.log(err);
    res.status(err.status || 500).send({ error: err.message || "Something went wrong" });
};

module.exports = errorHandler;