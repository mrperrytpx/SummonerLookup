import PlayerCard from "./PlayerCard";
import PlayerChampions from "./PlayerChampions";
import PlayerRank from "./PlayerRank";

const PlayerStats = () => {
  return ( 
    <div className="player-stats">
      <PlayerCard />
      <PlayerRank />
      <PlayerChampions />
    </div>
  );
}
 
export default PlayerStats;