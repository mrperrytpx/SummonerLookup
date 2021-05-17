import { useEffect, useContext } from "react";
import { useParams } from "react-router"
import Matches from "../components/Matches";
import PlayerStats from "../components/PlayerStats";
import { PlayerContext } from "../contexts/PlayerContext";

const Players = () => {
  const { region, server, name } = useParams();
  const { setPlayerData } = useContext(PlayerContext);

  // Fetch the search players data on page load
  useEffect(() => {
    const getPlayer = async () => {
      const response = await fetch(`/search/${region}/${server}/${name}`);
      if (response.status !== 200) {
        console.log("Player not found");
        return;
      }
      const data = await response.json();
      setPlayerData(data);
    }
    getPlayer();
  }, [region, server, name, setPlayerData]);

  return ( 
    <div className="container">
      <PlayerStats />
      <Matches />
    </div>
  );
}
 
export default Players;