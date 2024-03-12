const { genSalt, hash } = require("bcryptjs");

const hashPassword = async (password) => {
    const passwordSalt = await genSalt(11);
    const hashedPassword = await hash(password, passwordSalt);
    return hashedPassword;
};

module.exports = hashPassword;
