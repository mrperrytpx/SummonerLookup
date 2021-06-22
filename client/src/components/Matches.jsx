import { useContext } from "react";
import { useParams } from "react-router-dom";
// Context
import { PlayerContext } from "../contexts/PlayerContext";
// Component
import Match from "./Match"

const Matches = () => {
  const { server, summonerName } = useParams();
  const { playerData } = useContext(PlayerContext);

  const player = playerData[`${server.toLowerCase()}-${summonerName.toLowerCase()}`];

  return (
    <div className="matches">
      <p className="matches-header">MATCH HISTORY</p>

      {
        player?.games?.map(game => (
          <Match game={game} key={game?.matchId} />
        ))
      }

    </div>
  );
}

export default Matches;