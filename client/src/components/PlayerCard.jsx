import { useContext } from "react";
import { useParams } from "react-router-dom";
// Contexts
import { PlayerContext } from "../contexts/PlayerContext";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { TokenContext } from "../contexts/TokenContext";
import { LeagueVersionContext } from "../contexts/LeagueVersionContext";

const PlayerCard = () => {
  const { server, summonerName } = useParams();

  const { playerData } = useContext(PlayerContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  const { token } = useContext(TokenContext);
  const { version } = useContext(LeagueVersionContext);

  // Correct player from context
  const player = playerData[`${server.toLowerCase()}-${summonerName.toLowerCase()}`];

  const handleFollow = async () => {
    const abortCont = new AbortController();
    const payload = {
      summonerName: player?.accountData?.summonerName,
      region: player?.accountData?.region,
      server: player?.accountData?.server,
      puuid: player?.accountData?.puuid,
      summonerId: player?.accountData?.summonerId
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
      err.name === "AbortError" ? console.log("Fetch aborted") : console.log(err);
    }
    return () => abortCont.abort();
  }

  return (
    <div className="summoner">

      <div className="summoner-icon">
        <img
          className="player-summoner-icon"
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${player.accountData?.profileIconId}.png`} alt="Summoner's icon" />
        <div className="player-account-level">{player?.accountData?.summonerLevel}</div>
      </div>

      <div className="name-wrapper">

        <div className="player-name">
          <p className="summoner-name">{player?.accountData?.summonerName}</p>
        </div>

        <div className="follow-summoner">
          <button disabled={!isLoggedIn} onClick={() => handleFollow()} className="follow">FOLLOW</button>
        </div>

      </div>

    </div>
  );
}

export default PlayerCard;