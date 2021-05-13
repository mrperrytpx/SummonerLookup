import PlayerCard from "./PlayerCard";
import PlayerChampions from "./PlayerChampions";
import PlayerNav from "./PlayerNav";
import PlayerRank from "./PlayerRank";

const PlayerStats = () => {
  return ( 
    <div className="player-stats">
      <PlayerCard />
      <PlayerNav />
      <PlayerRank />
      <PlayerChampions />
    </div>
  );
}
 
export default PlayerStats;