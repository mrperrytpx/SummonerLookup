const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        min: 5
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    following: {
        type: Array,
        default: []
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);