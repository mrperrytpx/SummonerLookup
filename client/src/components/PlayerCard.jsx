import { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { TokenContext } from "../contexts/TokenContext";
import { useParams } from "react-router-dom";

const PlayerCard = () => {
  const { server, summonerName } = useParams();
  const { playerData } = useContext(PlayerContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  const { token } = useContext(TokenContext);
  const player = `${server.toLowerCase()}-${summonerName.toLowerCase()}`;



  const handleFollow = async () => {
    const abortCont = new AbortController();
    const payload = {
      summonerName: playerData[player]?.accountData?.summonerName,
      region: playerData[player]?.accountData?.region,
      server: playerData[player]?.accountData?.server,
      puuid: playerData[player]?.accountData?.puuid,
      summonerId: playerData[player]?.accountData?.summonerId
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

    } catch (err) {
      console.log(err);
    }

    return () => abortCont.abort();
  }

  return (
    <div className="summoner">

      <div className="summoner-icon">
        <img
          className="player-summoner-icon"
          src={`https://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/${playerData[player]?.accountData?.profileIconId}.png`} alt="Summoner's icon" />
        <div className="player-account-level">{playerData[player]?.accountData?.summonerLevel}</div>
      </div>

      <div className="name-wrapper">

        <div className="player-name">
          <p className="summoner-name">{playerData[player]?.accountData?.summonerName}</p>
        </div>

        <div className="follow-summoner">
          <button disabled={!isLoggedIn} onClick={() => handleFollow()} className="follow">FOLLOW</button>
        </div>

      </div>

    </div>
  );
}

export default PlayerCard;