const errorHandler = (err, _req, res, _next) => {
    console.log("entering error handler");
    res.status(err.status || 500).send({ error: "jedi kurac lmai" });
};

module.exports = errorHandler;