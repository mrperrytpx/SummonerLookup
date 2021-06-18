import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router"
import { PlayerContext } from "../contexts/PlayerContext";
//components
import Matches from "../components/Matches";
import PlayerStats from "../components/PlayerStats";
import PlayerCard from "../components/PlayerCard";
import PlayerNav from "../components/PlayerNav";

const Players = () => {
  const { region, server, summonerName } = useParams();
  const { setPlayer } = useContext(PlayerContext);
  const [loading, setLoading] = useState(true);

  // Fetch the search players data on page load
  useEffect(() => {
    const abortCont = new AbortController();
    ; (async function getPlayer() {
      const response = await fetch(`/api/${region}/${server}/${summonerName}`, {
        signal: abortCont.signal
      });
      if (response.status !== 200) {
        console.log(response);
        return;
      }
      const data = await response.json();
      setPlayer(data);
      setLoading(false);
    })();
    return () => abortCont.abort();
  }, [region, server, summonerName, setPlayer]);

  if (loading) return (<div>Loading...</div>)

  return (
    <div className="container">
      <PlayerCard />
      <PlayerNav />
      <PlayerStats />
      <Matches />
    </div>
  );
}

export default Players;