import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Contexts
import { LoggedInContext } from "../contexts/LoggedInContext";
import { TokenContext } from "../contexts/TokenContext";
import { LeagueVersionContext } from "../contexts/LeagueVersionContext";

const PlayerCard = () => {
  const queryClient = useQueryClient();
  const { region, server, summonerName } = useParams();

  const { accountData } = queryClient.getQueryData(["player", region, server, summonerName]);

  console.log(queryClient.getQueryData(["player", region, server, summonerName]));

  const { isLoggedIn } = useContext(LoggedInContext);
  const { token } = useContext(TokenContext);
  const { version } = useContext(LeagueVersionContext);

  const handleFollow = async () => {
    const controller = new AbortController();
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
        signal: controller.signal,
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
    return () => controller.abort();
  }

  return (
    <div className="summoner">

      <div className="summoner-icon">
        <img
          className="player-summoner-icon"
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${accountData?.profileIconId}.png`}
          alt="Summoner's icon"
        />
        <div className="player-account-level">{accountData?.summonerLevel}</div>
      </div>

      <div className="name-wrapper">

        <div className="player-name">
          <p className="summoner-name">{accountData?.summonerName}</p>
        </div>

        <div className="follow-summoner">
          <button disabled={!isLoggedIn} onClick={() => handleFollow()} className="follow">FOLLOW</button>
        </div>

      </div>

    </div>
  );
}

export default PlayerCard;