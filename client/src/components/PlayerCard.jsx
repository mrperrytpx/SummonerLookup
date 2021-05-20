import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerCard = () => {
  const { playerData: {accountData} } = useContext(PlayerContext);

  return ( 
    <div className="summoner">

      <div className="summoner-icon">
        <img className="player-summoner-icon" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/profileicon/${accountData?.profileIconId}.png`} alt="Summoner's icon" />
        <div className="player-account-level">{accountData?.summonerLevel}</div>
      </div>

      <div className="name-wrapper">

        <div className="player-name">
          <p className="summoner-name">{accountData?.summonerName}</p>
        </div> 

        <div className="follow-summoner"> 
          <button className="follow">FOLLOW</button>  
        </div>
        
      </div>  
    </div>
    );
}
 
export default PlayerCard;