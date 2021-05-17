const PlayerNav = () => {
  return ( 
      <nav className="profile-navbar">
        <div className="profile-navbar-wrapper">
          <a href="s" className="overview">
            <p>OVERVIEW</p>
          </a>
          <a href="s" className="champions">
            <p>CHAMPION STATS</p>
          </a>
          <a href="s" className="live-game">
            <p>LIVE GAME</p>
          </a>
        </div>
      </nav>
    );
}
 
export default PlayerNav;