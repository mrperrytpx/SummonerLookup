import PlayerChampions from "./PlayerChampions";
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