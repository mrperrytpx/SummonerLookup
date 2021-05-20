const PlayerRanked = ({ ranked }) => {

    return ( 
        <div className="rank-stats-wrap">

        <div className="rank-image">
          <img className="rank-icon"src={`https://static.u.gg/assets/lol/ranks/2d/${ranked?.tier?.toLowerCase()}.svg`} alt="" />
        </div>

        <div className="rank-points">
          <div className="rank-elo">{ranked?.tier} {ranked?.division} : {ranked?.LP}LP</div>
          <div className="rank-winrate">
            {+(ranked?.wins / (ranked?.wins + ranked?.losses) * 100).toFixed(2)}% ({ranked?.wins}W - {ranked?.losses}L)
          </div>
        </div>
        
      </div>
     );
}
 
export default PlayerRanked;