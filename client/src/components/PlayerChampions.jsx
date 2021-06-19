import RankedChampion from "./RankedChampion";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { useParams } from "react-router-dom";

const PlayerChampions = () => {

  const [champions, setChampions] = useState("")

  const { region, server, summonerName } = useParams();
  const { playerData } = useContext(PlayerContext);
  const player = `${region.toLowerCase()}-${server.toLowerCase()}-${summonerName.toLowerCase()}`;

  useEffect(() => {
    (async function () {
      const champions = await (await fetch("https://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json")).json();
      setChampions(champions);
    })();
  }, [])

  return (
    <div className="best-champions">
      <p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>
      <div className="best-champions-box">
        {
          playerData[player]?.stats?.slice(0, 3).map(champion => (
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