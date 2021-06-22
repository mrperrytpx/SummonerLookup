import { useContext, useEffect } from "react";
import { useParams } from "react-router"
import { useQuery, useQueryClient } from "react-query";
// Contexts
import { PlayerContext } from "../contexts/PlayerContext";
// Components
import PlayerCard from "../components/PlayerCard";
import PlayerNav from "../components/PlayerNav";

const fetchPlayer = (region, server, summonerName) => {
  const controller = new AbortController();
  // Only way I found how to properly cancel a react-query fetch request
  // If user goes back right after searching for a player (just an example)
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`/api/${region}/${server}/${summonerName}`, {
        method: "GET",
        signal: controller.signal
      });
      if (!response.ok) reject(new Error("Problem fetching data"));
      const data = await response.json();
      resolve(data);
    } catch (error) {
      if (error?.name === "AbortError") reject(new Error("Request aborted"));
    }
  });
  promise.cancel = () => controller.abort();
  return promise;
}

const Players = () => {
  const queryClient = useQueryClient();

  const { region, server, summonerName } = useParams();
  const { playerData, setPlayer } = useContext(PlayerContext);

  const { isLoading, isError } = useQuery(
    ["player", region, server, summonerName],
    () => fetchPlayer(region, server, summonerName),
    {
      retryOnMount: true,
      onError: () => {
        queryClient.cancelQueries("player");
      },
      onSuccess: (data) => {
        const player = `${server.toLowerCase()}-${summonerName.toLowerCase()}`;
        setPlayer({ ...playerData, [player]: data });
      },
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

  if (isError) return (<div>No summoner</div>);

  if (isLoading) return (<div>Loading...</div>)

  return (
    <div className="container">
      <PlayerCard />
      <PlayerNav />
    </div>
  );
}

export default Players;