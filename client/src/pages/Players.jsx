import { useEffect } from "react";
import { useParams } from "react-router"
import Matches from "../components/Matches";
import PlayerStats from "../components/PlayerStats";

const Players = () => {
  const { region, server, summonerName } = useParams();

  // Fetch the search players data on page load
  useEffect(() => {
    ;(async function getPlayer() {
      const data = await (await fetch(`/search/${region}/${server}/${summonerName}`)).json();
      console.log(data);
    })();
    return;
  }, [region, server, summonerName]);

  return ( 
    <div className="container">
      <PlayerStats />
      <Matches />
  </div>
  );
}
 
export default Players;