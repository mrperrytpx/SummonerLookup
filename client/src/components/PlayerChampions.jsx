import RankedChampion from "./RankedChampion";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const handleChampions = (stats) => {
  const resultArr = [];
    for (let id in stats) {
      let member = {
          id,
          ...stats[id]
      }
      resultArr.push(member)
    }

    const topThree = []
    for (let j = 0; j < 3; j++) {
      let n = 0;
      let id;
      for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i].n >= n) {
          n = resultArr[i].n
          id = resultArr[i].id
        }
      }
      topThree.push(resultArr.find(member => member.n === n && member.id === id));
      resultArr.splice(resultArr.findIndex(member => member.n === n && member.id === id), 1);
    }
    return topThree;
}

const PlayerChampions = () => {

  const [champions, setChampions] = useState("")
  const { playerData: {stats} } = useContext(PlayerContext);

  useEffect(() => {
    (async function () {
      console.log(handleChampions(stats));
      const champions = await(await fetch("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json")).json();
      setChampions(champions);
    })();
  }, [])

  
  

  return ( 
    <div className= "best-champions">
      <p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>
      <div className="best-champions-box">
      {
        handleChampions(stats).map(champion => (
          <RankedChampion champions={champions} championId={champion.id} stats={champion} />
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