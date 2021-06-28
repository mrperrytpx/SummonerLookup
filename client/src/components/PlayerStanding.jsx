import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Contexts
// Components
import PlayerRanked from "./PlayerRanked";
import PlayerUnranked from "./PlayerUnranked";

const PlayerStanding = () => {
  const queryClient = useQueryClient();
  const { region, server, summonerName } = useParams();
  const [isRanked, setIsRanked] = useState(false);

  const { ranked } = queryClient.getQueryData(["player", region, server, summonerName]);

  useEffect(() => {
    if (ranked?.tier) {
      setIsRanked(true);
    }
  }, [ranked])

  return (
    <div className="rank">
      <p className="rank-header">RANK</p>
      {isRanked ?
        <PlayerRanked ranked={ranked} /> :
        <PlayerUnranked />
      }
    </div>
  );
}

export default PlayerStanding;