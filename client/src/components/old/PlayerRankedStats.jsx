import { useQueryClient } from "react-query";
import { useParams } from "react-router";
import RankedChampionFull from "./RankedChampionFull";

const PlayerRankedStats = () => {
	const queryClient = useQueryClient();
	const { region, server, summonerName } = useParams();
	const { stats } = queryClient.getQueryData(["player", region, server, summonerName.toLowerCase()])

	return (
		<div className="ranked-stats-wrapper">
			<p className="ugg-disclaimer">*Stats provided by U.GG*</p>
			<div className="ranked-stats-fields">
				<p>Rank</p>
				<p>Champion Name</p>
				<p>Win Rate</p>
				<p>KDA</p>
				<p>Avg. Gold</p>
				<p>Avg. CS</p>
				<p>Double</p>
				<p>Triple</p>
				<p>Quadra</p>
				<p>Penta</p>
			</div >
			{stats.length && stats.map((champ, idx) => (
				<RankedChampionFull
					idx={idx}
					key={champ.championId}
					stats={champ}
				/>
			))}
		</div >
	);
}

export default PlayerRankedStats;