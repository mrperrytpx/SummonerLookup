const LEAGUE_SERVERS = {
    eun1: "europe",
    euw1: "europe",
    tr1: "europe",
    ru: "europe",
    na1: "americas",
    la1: "americas",
    la2: "americas",
    br1: "americas",
    oc1: "asia",
    jp1: "asia",
    kr: "asia",
    ph2: "asia",
    sg2: "asia",
    th2: "asia",
    tw2: "asia",
    vn2: "asia",
};

const LEAGUE_SERVERS_FOR_MATCHES = {
    eun1: "europe",
    euw1: "europe",
    tr1: "europe",
    ru: "europe",
    na1: "americas",
    la1: "americas",
    la2: "americas",
    br1: "americas",
    jp1: "asia",
    kr: "asia",
    oc1: "sea",
    ph2: "sea",
    sg2: "sea",
    th2: "sea",
    tw2: "sea",
    vn2: "sea",
};

const leagueRegion = (server) => LEAGUE_SERVERS[server.toLowerCase()];
const leagueRegionForMatches = (server) =>
    LEAGUE_SERVERS_FOR_MATCHES[server.toLowerCase()];

module.exports = {
    leagueRegion: leagueRegion,
    leagueRegionForMatches: leagueRegionForMatches,
};
