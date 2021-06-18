const PlayerUnranked = () => {
  return (
    <div className="rank-stats-wrap">

      <div className="rank-image">
        <img className="rank-icon"
          src="https://static.u.gg/assets/lol/ranks/2d/unranked.svg"
          alt="Player is unranked" />
      </div>

      <div className="rank-points">
        <div className="unranked">Player isn't currently ranked</div>
      </div>

    </div>
  );
}

export default PlayerUnranked;