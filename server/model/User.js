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
			region: { // Player's region
				type: String,
				required: true
			},
			server: { // Player's server
				type: String,
				required: true,
			},
			summonerName: { // Player's summoner name
				type: String,
				required: true
			},
			summonerId: { // Player's summoner ID
				type: String,
				required: true
			},
			puuid: { // Player's puuid
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
