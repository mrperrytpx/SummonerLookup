import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import PlayerRanked from "./PlayerRanked";
import PlayerUnranked from "./PlayerUnranked";

const PlayerStanding = () => {
  const { region, server, summonerName } = useParams();
  const { playerData } = useContext(PlayerContext);
  const player = `${region.toLowerCase()}-${server.toLowerCase()}-${summonerName.toLowerCase()}`;
  const [isRanked, setIsRanked] = useState(false);

  useEffect(() => {
    if (playerData[player]?.ranked?.tier) {
      setIsRanked(true);
    }
  }, [playerData, player])

  return (
    <div className="rank">
      <p className="rank-header">RANK</p>
      {isRanked ?
        <PlayerRanked ranked={playerData[player]?.ranked} /> :
        <PlayerUnranked />
      }
    </div>
  );
}

export default PlayerStanding;