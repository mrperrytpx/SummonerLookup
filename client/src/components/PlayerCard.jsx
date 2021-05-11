const PlayerCard = () => {
  return ( 
    <div className="player-card">
      <div className="player-icon">
        <img className="player-summoner-icon" src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon898.jpg" alt="" />
      </div>
      <div className="player-name-wrap">
        <div className="player-name">SUMMONER NAME</div> 
        <button className="follow">FOLLOW</button>  
      </div>  
    </div>
    );
}
 
export default PlayerCard;