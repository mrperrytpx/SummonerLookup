const LEAGUE_SERVERS = {
    "eun1": "europe",
    "euw1": "europe",
    "tr1": "europe",
    "ru1": "europe",
    "oce1": "sea",
    "na1": "americas",
    "las1": "americas",
    "lan1": "americas",
    "br1": "americas",
    "kr1": "asia",
    "jp1": "asia"
};

const leagueRegion = (server) => LEAGUE_SERVERS[server.toLowerCase()];

module.exports = leagueRegion;