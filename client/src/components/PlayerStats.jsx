import PlayerCard from "./PlayerCard";
import PlayerChampions from "./PlayerChampions";
import PlayerNav from "./PlayerNav";
import PlayerStanding from "./PlayerStanding";

const PlayerStats = () => {
  return ( 
    <div className="wrapper">
      <PlayerChampions />
      <PlayerStanding />
    </div>
  );
}
 
export default PlayerStats;