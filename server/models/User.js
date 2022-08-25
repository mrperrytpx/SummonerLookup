const mongoose = require("mongoose");

const Summoner = require("./Summoner");

const userSchema = new mongoose.Schema({
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
	following: [Summoner],
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
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("User", userSchema);
