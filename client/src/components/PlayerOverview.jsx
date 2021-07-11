import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Components
import PlayerTopThreeChampions from "./PlayerTopThreeChampions";
import PlayerRankedStandings from "./PlayerRankedStandings";

const PlayerOverview = () => {
  const queryClient = useQueryClient();
  const { region, server, summonerName } = useParams();

  const { ranked } = queryClient.getQueryData(["player", region, server, summonerName.toLowerCase()]);

  return (
    <div className="wrapper">
      <PlayerTopThreeChampions />
      <PlayerRankedStandings ranked={ranked} />
    </div>
  );
}

export default PlayerOverview;