const LEAGUE_SERVERS = {
    "eun1": "europe",
    "euw1": "europe",
    "tr1": "europe",
    "ru": "europe",
    "na1": "americas",
    "la1": "americas",
    "la2": "americas",
    "br1": "americas",
    "oc1": "sea",
    "jp1": "asia",
    "kr": "asia",
};

const leagueRegion = (server) => LEAGUE_SERVERS[server.toLowerCase()];

module.exports = leagueRegion;