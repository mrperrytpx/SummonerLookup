import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import PlayerCard from "../components/PlayerCard";
import PlayerNav from "../components/PlayerNav";
// contexts
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerChampionStats = () => {
	const { region, server, summonerName } = useParams();
	const { playerData, setPlayer } = useContext(PlayerContext);
	
	return ( 
		<div className="container">
			<PlayerCard />
			<PlayerNav />       
		</div>
	);
}
 
export default PlayerChampionStats;