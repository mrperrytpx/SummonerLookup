const Summoner = {
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
    },
    profileIconId: {
        type: Number,
        required: true
    },
    summonerLevel: {
        type: Number,
        required: true
    },
    followedAt: {
        type: Date,
        default: Date.now
    }
};

module.exports = Summoner;