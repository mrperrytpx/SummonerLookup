import RankedChampion from "./RankedChampion";
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerChampions = () => {

  const { playerData: {stats} } = useContext(PlayerContext);
  

  return ( 
    <div className= "best-champions">
      <p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>
      <div className="best-champions-box">
      {
        (Object.keys(stats).map(key => (
          <RankedChampion stats={stats[key].n} championId={key} key={key} />
        )))
      }
      </div>
        
      <div className="goto-stats">
        <a href="/stats">
          <p>SEE ALL CHAMPIONS</p>
        </a>
      </div>
    </div>
  );
}
 
export default PlayerChampions;