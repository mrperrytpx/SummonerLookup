const asyncHandler = (fn) => (req, res, next) => {
    console.log("entering async handler");
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

module.exports = asyncHandler;