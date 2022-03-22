const use = (fn) => (req, res, next) => {
    console.log("entering error controller");
    Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = use;