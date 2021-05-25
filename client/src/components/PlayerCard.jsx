import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { LoggedInContext } from "../contexts/LoggedInContext";

const PlayerCard = () => {
  const { playerData: {accountData} } = useContext(PlayerContext);
  const { isLoggedIn } = useContext(LoggedInContext);

  const handleFollow = async () => {
    const abortCont = new AbortController();
    const payload = {
      summonerName: accountData?.summonerName,
      region: accountData?.region,
      server: accountData?.server,
      puuid: accountData?.puuid,
      summonerId: accountData?.summonerId
    }
    console.log(payload);

    try {
      const response = await fetch(`/add/`, {
        method: "POST",
        credentials: "include",
        signal: abortCont.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    } catch(err) {
      console.log(err);
    }

    return () => abortCont.abort();
  }

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
          <button disabled={!isLoggedIn} onClick={handleFollow} className="follow">FOLLOW</button>  
        </div>
        
      </div>  
    </div>
    );
}
 
export default PlayerCard;