import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { TokenContext } from "../contexts/TokenContext";

const PlayerCard = () => {
  const { playerData: {accountData} } = useContext(PlayerContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  const { token } = useContext(TokenContext);

  const handleFollow = async () => {
    const abortCont = new AbortController();
    const payload = {
      summonerName: accountData?.summonerName,
      region: accountData?.region,
      server: accountData?.server,
      puuid: accountData?.puuid,
      summonerId: accountData?.summonerId
    }

    try {
      const response = await fetch(`/api/add`, {
        method: "POST",
        signal: abortCont.signal,
        headers: { 
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        }, 
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error("Couldn't follow player");
      
    } catch(err) {
      console.log(err);
    }

    return () => abortCont.abort();
  }

  return ( 
    <div className="summoner">

      <div className="summoner-icon">
        <img className="player-summoner-icon" src={`https://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/${accountData?.profileIconId}.png`} alt="Summoner's icon" />
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