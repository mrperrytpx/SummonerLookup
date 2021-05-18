import { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerCard = () => {
  const { playerData } = useContext(PlayerContext);
  const [summonerName, setSummonerName] = useState("");
  const [summonerIcon, setSummonerIcon] = useState("");
  const [summonerLevel, setSummonerLevel] = useState("");

  useEffect(() =>{
    setSummonerName(playerData?.accountData?.summonerName);
    setSummonerIcon(`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/profileicon/${playerData?.accountData?.profileIconId}.png`);
    setSummonerLevel(playerData?.accountData?.summonerLevel)
    console.log(playerData);
  }, [playerData]);

  return ( 
    <div className="summoner">

      <div className="summoner-icon">
        <img className="player-summoner-icon" src={summonerIcon} alt="Summoner's icon" />
        <div className="player-account-level">{summonerLevel}</div>
      </div>

      <div className="name-wrapper">

        <div className="player-name">
          <p className="summoner-name">{ summonerName }</p>
        </div> 

        <div className="follow-summoner"> 
          <button className="follow">FOLLOW</button>  
        </div>
        
      </div>  
    </div>
    );
}
 
export default PlayerCard;