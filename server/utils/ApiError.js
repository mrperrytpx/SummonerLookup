class ApiError extends Error {
    constructor(message, code, url) {
        super(message);
        this.code = code;
        this.url = url;
    }
}

module.exports = ApiError;