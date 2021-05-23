import RankedChampion from "./RankedChampion";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerChampions = () => {

  const [champions, setChampions] = useState("")
  const { playerData: {stats} } = useContext(PlayerContext);

  useEffect(() => {
    (async function () {
      const champions = await(await fetch("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json")).json();
      setChampions(champions);
    })();
  }, [])

  return ( 
    <div className= "best-champions">
      <p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>
      <div className="best-champions-box">
      {
        stats.slice(0, 3).map(champion => (
          <RankedChampion 
            key={champion.championId}
            champions={champions} 
            championId={champion.championId} 
            stats={champion} 
          />
        ))
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