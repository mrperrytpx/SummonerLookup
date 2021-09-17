import { useQueryClient } from "react-query";

const RankedChampionFull = ({ stats, idx }) => {
	const queryClient = useQueryClient();
	const champions = queryClient.getQueryData(["champions"]);

	const { championId } = stats;
	const championName = champions.get(`${championId}`);

	return (
		<div className="champ-stats">
			<p>{idx + 1}</p>
			<div className="image-and-name">
				<img src={`https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/${championName}.png`} alt="Champion" />
				<p className="no">{championName}</p>
			</div>
			<div className="two-rows">
				<p>99%</p>
				<p>9999W / 9999L</p>
			</div>
			<div className="two-rows">
				<p>2.88KDA</p>
				<p>88 / 88 / 88</p>
			</div>
			<p>88888G</p>
			<p>888.8CS</p>
			<p>888</p>
			<p>888</p>
			<p>888</p>
			<p>888</p>
		</div>
	);
}

export default RankedChampionFull;