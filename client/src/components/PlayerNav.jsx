import { Link, useParams } from "react-router-dom";

const PlayerNav = () => {
  const { region, server, summonerName } = useParams();

  return ( 
      <nav className="profile-navbar">
        <div className="profile-navbar-wrapper">
          <Link to={`/${region}/${server}/${summonerName}`} className="overview">
            <p>OVERVIEW</p>
          </Link>
          <Link to={`/${region}/${server}/${summonerName}/stats`} className="champions">
            <p>CHAMPION STATS</p>
          </Link>
          <Link to={`/${region}/${server}/${summonerName}/live-game`} className="live-game">
            <p>LIVE GAME</p>
          </Link>
        </div>
      </nav>
    );
}
 
export default PlayerNav;