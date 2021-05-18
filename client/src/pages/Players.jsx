import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router"
import Matches from "../components/Matches";
import PlayerStats from "../components/PlayerStats";
import { PlayerContext } from "../contexts/PlayerContext";

const Players = () => {
  const { region, server, summonerName } = useParams();
  const { setPlayer } = useContext(PlayerContext);
  const [loading, setLoading] = useState(true);

  // Fetch the search players data on page load
  useEffect(() => {
    ;(async function getPlayer() {
      const response = await fetch(`/search/${region}/${server}/${summonerName}`);
      if (response.status !== 200) {
        console.log(response);
        return;
      }
      const data = await response.json();
      setPlayer(data);
      setLoading(false);
    })();
  }, [region, server, summonerName, setPlayer]);

  if (loading) return (<div>Loading...</div>)

  return ( 
    <div className="container">
      <PlayerStats />
      <Matches />
    </div>
  );
}
 
export default Players;