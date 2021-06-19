import { useContext } from "react";
import { useParams } from "react-router"
import { PlayerContext } from "../contexts/PlayerContext";
//components
import PlayerCard from "../components/PlayerCard";
import PlayerNav from "../components/PlayerNav";
import { useQuery } from "react-query";

const fetchPlayer = async (region, server, summonerName) => {
  const response = await fetch(`/api/${region}/${server}/${summonerName}`);
  const data = await response.json();
  if (!data) return {};
  return data;
}

const Players = () => {
  const { region, server, summonerName } = useParams();
  const { playerData, setPlayer } = useContext(PlayerContext);

  const { isLoading, isError } = useQuery(
    ["player", region, server, summonerName],
    () => fetchPlayer(region, server, summonerName),
    {
      onError: () => {
        setPlayer({ ...playerData, [`${server.toLowerCase()}-${summonerName.toLowerCase()}`]: null })
      },
      onSuccess: (data) => {
        setPlayer({ ...playerData, [`${server.toLowerCase()}-${summonerName.toLowerCase()}`]: data });
      },
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000
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