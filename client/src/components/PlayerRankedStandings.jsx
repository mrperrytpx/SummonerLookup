const PlayerRankedStandings = ({ ranked }) => {
	return (
		<div className="rank-stats-wrap">

			<div className="rank-image">
				<img
					className="rank-icon"
					src={ranked
						? `https://static.u.gg/assets/lol/ranks/2d/${ranked?.tier?.toLowerCase()}.svg`
						: "https://static.u.gg/assets/lol/ranks/2d/unranked.svg"
					}
					alt={ranked
						? "Player's ranked position"
						: "Player is unranked"
					}
				/>
			</div>

			<div className="rank-points">
				{ranked
					?
					<>
						<p className="rank-elo">{ranked?.tier} {ranked?.division} : {ranked?.LP}LP</p>
						<p className="rank-winrate">
							{+(ranked?.wins / (ranked?.wins + ranked?.losses) * 100).toFixed(2)}% ({ranked?.wins}W - {ranked?.losses}L)
						</p>
					</>
					:
					<div className="unranked">Player isn't currently ranked</div>
				}
			</div>

		</div>
	);
}

export default PlayerRankedStandings;