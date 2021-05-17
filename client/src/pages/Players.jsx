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
    ;(async function getPlayer() {
      const request = await fetch(`/search/${region}/${server}/${name}`);
      if (request.status !== 200) {
        console.log("Player not found");
        return;
      }
      const data = await request.json();
      setPlayer(data);
    })();
  }, [region, server, name]);

  return ( 
    <div className="container">
      <PlayerStats />
      <Matches />
    </div>
  );
}
 
export default Players;