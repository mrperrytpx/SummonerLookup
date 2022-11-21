const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
    windowMs: 10000,
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Woah... Slow down there, buckaroo. Too many requests",
    handler: (_request, response, _next, options) => {
        return response
            .status(options.statusCode)
            .json({ message: "Woah... Slow down there, buckaroo. Too many requests." });
    }
});

module.exports = rateLimiter;