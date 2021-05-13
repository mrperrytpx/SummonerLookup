const PlayerCard = () => {
  return ( 
    <div className="summoner">
      <div className="summoner-icon">
        <img className="player-summoner-icon" src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon898.jpg" alt="" />
      </div>
      <div className="name-wrapper">
        <div className="player-name">
          <p className="summoner-name">hide on bush</p>
        </div> 
        <div className="follow-summoner"> 
          <button className="follow">FOLLOW</button>  
        </div>
      </div>  
    </div>
    );
}
 
export default PlayerCard;