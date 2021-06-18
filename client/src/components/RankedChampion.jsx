import { useEffect, useState } from "react";

const RankedChampion = ({ champions, championId, stats }) => {
  const [championName, setChampionName] = useState("");

  useEffect(() => {
    for (let name in champions.data) {
      if (champions?.data[name]?.key === championId.toString()) setChampionName(champions?.data[name]?.id)
    }
  }, [champions, stats, championId, championName]);

  return (
    <div className="best-champions-wrapper">

      <div className="best-champion-look">
        <div className="best-champion-icon">
          <img
            className="champion-icon"
            src={`https://static.u.gg/assets/lol/riot_static/11.11.1/img/champion/${championName}.png`}
            alt="Champion"
          />
        </div>
        <p className="best-champion-name">{championName}</p>
      </div>

      <div className="best-champion-score">
        <p className="best-kda">
          {stats.deaths === 0 ? stats.kills + stats.assists : +((stats.kills + stats.assists) / stats.deaths).toFixed(2)} KDA
        </p>
        <p className="best-avg">
          {(stats.kills / stats.totalMatches).toFixed(1)} / {(stats.deaths / stats.totalMatches).toFixed(1)} / {(stats.assists / stats.totalMatches).toFixed(1)}
        </p>
        <p className="best-avg">
          {Math.round(stats.cs / stats.totalMatches)} CS
        </p>
      </div>

      <div className="best-champion-games">
        <p className="winrate">{+((stats.wins / stats.totalMatches) * 100).toFixed(2)}%</p>
        <p className="games">{stats.totalMatches} games</p>
      </div>

    </div>
  );
}

export default RankedChampion;