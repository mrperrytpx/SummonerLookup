import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Components
import RankedChampionBasic from "./RankedChampionBasic";

const PlayerChampions = () => {
	const queryClient = useQueryClient();
	const { region, server, summonerName } = useParams();

	const { stats } = queryClient.getQueryData(["player", region, server, summonerName.toLowerCase()]);
	return (
		<div className="best-champions">

			<p className="best-champions-header">TOP 3 PLAYED CHAMPIONS</p>

			<div className="best-champions-box">
				{
					stats?.slice(0, 3).map(champion => (
						<RankedChampionBasic
							key={champion.damage}
							championId={champion.championId}
							stats={champion}
						/>
					))
				}
			</div>

			<div className="goto-stats">
				<p>SEE ALL CHAMPIONS</p>
			</div>

		</div>
	);
}

export default PlayerChampions;