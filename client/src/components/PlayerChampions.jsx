import RankedChampion from "./RankedChampion";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerChampions = () => {

  const [champions, setChampions] = useState("")
  const { playerData: {stats} } = useContext(PlayerContext);

  useEffect(() => {
    (async function champions() {
      const champions = await(await fetch("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json")).json();
      setChampions(champions);
    })();
  }, [champions, stats])
  

  return ( 
    <div className= "best-champions">
      <p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>
      <div className="best-champions-box">
      {
        (Object.keys(stats).map(key => {
          return (<RankedChampion champions={champions} championId={key} stats={stats[key]} key={key} />)
        }))
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