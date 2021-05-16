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
    // Who the user follows
    following: [
        {
            region: {
                type: String,
                required: true
            },
            server: {
                type: String,
                required: true,
            },
            summonerName: {
                type: String,
                required: true
            },
            summonerID: {
                type: String,
                required: true
            },
            puuid: {
                type: String,
                required: true
            }
        },
    ],
    // refresh token that's stored in the cookie
    refreshToken: {
        type: String
    },
    // email confirmed or not, TBI
    confirmed: {
        type: Boolean,
        default: false
    },
    // when the user registered
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);