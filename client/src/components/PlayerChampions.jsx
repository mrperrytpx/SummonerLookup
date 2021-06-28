import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Contexts
import { LeagueVersionContext } from "../contexts/LeagueVersionContext";
// Components
import RankedChampion from "./RankedChampion";

const PlayerChampions = () => {
  const [champions, setChampions] = useState("")
  const { region, server, summonerName } = useParams();
  const queryClient = useQueryClient();
  const { version } = useContext(LeagueVersionContext);

  const { stats } = queryClient.getQueryData(["player", region, server, summonerName]);

  // Fetch all champions' data
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
      if (!response.ok) throw new Error("Error fetching champions");
      const data = await response.json();
      setChampions(data);
    })();
  }, [version]);

  return (
    <div className="best-champions">

      <p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>

      <div className="best-champions-box">
        {
          stats?.slice(0, 3).map(champion => (
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
        <p>SEE ALL CHAMPIONS</p>
      </div>

    </div>
  );
}

export default PlayerChampions;