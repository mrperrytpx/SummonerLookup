import Match from "./Match"
import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";

const Matches = () => {
  const { playerData: { games } } = useContext(PlayerContext);

  return (
    <div className="matches">
      <p className="matches-header">MATCH HISTORY</p>
      {games.map(game => (
        <Match game={game} key={game?.matchId} />
      ))}
    </div>
  );
}

export default Matches;