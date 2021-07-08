import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Components
import PlayerTopThreeChampions from "./PlayerTopThreeChampions";
import PlayerRankedStandings from "./PlayerRankedStandings";

const PlayerOverview = () => {
  const queryClient = useQueryClient();
  const { region, server, summonerName } = useParams();

  const { ranked } = queryClient.getQueryData(["player", region, server, summonerName]);

  return (
    <div className="wrapper">
      <PlayerTopThreeChampions />
      <div className="rank">
        <p className="rank-header">RANK</p>
        <PlayerRankedStandings ranked={ranked} />
      </div>
    </div>
  );
}

export default PlayerOverview;