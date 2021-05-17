import { useEffect, useContext } from "react";
import { useParams } from "react-router"
import Matches from "../components/Matches";
import PlayerStats from "../components/PlayerStats";
import { PlayerContext } from "../contexts/PlayerContext";

const Players = () => {
  const { region, server, name } = useParams();
  const { setPlayer } = useContext(PlayerContext);

  // Fetch the search players data on page load
  useEffect(() => {
    const getPlayer = async () => {
      const response = await fetch(`/search/${region}/${server}/${name}`);
      if (response.status !== 200) {
        console.log("Player not found");
        return;
      }
      const data = await response.json();
      setPlayer(data);
    }
    getPlayer();
  }, [region, server, name, setPlayer]);

  return ( 
    <div className="container">
      <PlayerStats />
      <Matches />
    </div>
  );
}
 
export default Players;