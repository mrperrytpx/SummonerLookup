import PlayerCard from "./PlayerCard";
import PlayerChampions from "./PlayerChampions";
import PlayerNav from "./PlayerNav";
import PlayerRank from "./PlayerRank";
import { PlayerContext } from "../contexts/PlayerContext";
import { useContext, useEffect } from "react";

const PlayerStats = () => {
  const { playerData } = useContext(PlayerContext);

  useEffect(() => {
    console.log(playerData)
  }, [playerData]);

  return ( 
    <div className="player-stats">
      <PlayerCard />
      <PlayerNav />
      <div className="wrapper">
        <PlayerChampions />
        <PlayerRank />
      </div>
    </div>
  );
}
 
export default PlayerStats;