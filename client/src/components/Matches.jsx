import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Components
import Match from "./Match"

const Matches = () => {
  const queryClient = useQueryClient();
  const { region, server, summonerName } = useParams();

  const { games } = queryClient.getQueryData(["player", region, server, summonerName.toLowerCase()]);

  return (
    <div className="matches">
      <p className="matches-header">MATCH HISTORY</p>

      {
        games?.map(game => (
          <Match game={game} key={game?.matchId} />
        ))
      }

    </div>
  );
}

export default Matches;