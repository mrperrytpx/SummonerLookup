const { deleteUser } = require("../../services/internal");

const deleteAccount = async (req, res) => {
    const { _id } = req.user; // Get the _id from request.user which was set in the authorize middleware

    await deleteUser({ _id: _id });
    res.clearCookie("slup"); // Clear the refresh cookie
    res.sendStatus(204); // Send success
};

module.exports = deleteAccount;
