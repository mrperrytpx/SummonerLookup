import Match from "./Match"
import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Matches = () => {
  const { server, summonerName } = useParams();
  const { playerData } = useContext(PlayerContext);
  const player = `${server.toLowerCase()}-${summonerName.toLowerCase()}`;

  return (
    <div className="matches">
      <p className="matches-header">MATCH HISTORY</p>

      {
        playerData[player]?.games?.map(game => (
          <Match game={game} key={game?.matchId} />
        ))
      }

    </div>
  );
}

export default Matches;