const PlayerRank = () => {
  
  return ( 
    <div className="rank">
      <p className="rank-header">Current standing:</p>

      <div className="rank-stats-wrap">

        <div className="rank-image">
          <img className="rank-icon"src="https://static.u.gg/assets/lol/ranks/2d/silver.svg" alt="" />
        </div>

        <div className="rank-points">
          <div className="rank-elo">Silver IV : 50LP</div>
          <div className="rank-winrate"> 69% (40W - 20L)</div>
        </div>
        
      </div>
    </div>
  );
}
 
export default PlayerRank;