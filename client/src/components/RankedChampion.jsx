import { useEffect, useState } from "react";

const RankedChampion = ({ champions, championId, stats }) => {
  const [championName, setChampionName] = useState("");

  useEffect(() => {
    for (let name in champions.data) {
      if (champions?.data[name]?.key === championId) setChampionName(champions?.data[name]?.id)
    }
  }, [champions, stats, championId, championName]); 

  return (  
    <div className="best-champions-wrapper">

      <div className="best-champion-look">
        <div className="best-champion-icon">
          <img 
            className="champion-icon" 
            src={`https://static.u.gg/assets/lol/riot_static/11.10.1/img/champion/${championName}.png` }
            alt="Champion" 
          />
        </div>
        <p className="best-champion-name">{championName}</p>
      </div>

      <div className="best-champion-score">
        <p className="best-kda">
          {stats.d === 0 ? stats.k + stats.a : +((stats.k + stats.a) / stats.d).toFixed(2)} KDA
        </p>
        <p className="best-avg">
          {Math.round(stats.k / stats.n)} / {Math.round(stats.d / stats.n)} / {Math.round(stats.a / stats.n)}
        </p>
        <p className="best-avg">
          {Math.round(stats.cs / stats.n)} CS ({+(stats.cs / (stats.t / 60)).toFixed(1)})
        </p>
      </div>

      <div className="best-champion-games">
        <p className="winrate">{+((stats.w / stats.n) * 100).toFixed(2)}%</p>
        <p className="games">{stats.n} games</p>
      </div>
    
    </div>
  );
}
 
export default RankedChampion;