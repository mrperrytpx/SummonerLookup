import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// Contexts
import { PlayerContext } from "../contexts/PlayerContext";
// Components
import PlayerRanked from "./PlayerRanked";
import PlayerUnranked from "./PlayerUnranked";

const PlayerStanding = () => {
  const { server, summonerName } = useParams();
  const { playerData } = useContext(PlayerContext);
  const [isRanked, setIsRanked] = useState(false);

  const player = playerData[`${server.toLowerCase()}-${summonerName.toLowerCase()}`];

  useEffect(() => {
    if (player?.ranked?.tier) {
      setIsRanked(true);
    }
  }, [player])

  return (
    <div className="rank">
      <p className="rank-header">RANK</p>
      {isRanked ?
        <PlayerRanked ranked={player?.ranked} /> :
        <PlayerUnranked />
      }
    </div>
  );
}

export default PlayerStanding;