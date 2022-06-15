import UnfollowButton from "./UnfollowButton";

const SERVERS = Object.freeze({
	eun1: "EUNE",
	euw1: "EIW",
	tr1: "TR",
	ru: "RU",
	na: "NA",
	oc1: "OCE",
	la1: "LAN",
	la2: "LAS",
	br1: "NR",
	kr: "KR",
	jp1: "JP"
});

const Summoner = ({ summoner }) => {

	return (
		<div className="followed-player">

			<div className="followed-player-summary">

				<div className="followed-player-profile">

					<div className="followed-player-icon">
						<img
							className="followed-icon"
							src=""
							alt="Followed player display"
						/>
						<div className="level"> 123 </div>
					</div>

					<div className="followed-player-name">
						{summoner.summonerName}, {SERVERS[summoner.server]}
					</div>

				</div>

				<div className="followed-player-rank">

					{/* REFACTOR THIS SO IT USES <PlayerRankedStanding /> */}
					<div className="followed-player-tier">
						<img
							className="followed-rank"
							src="https://static.u.gg/assets/lol/ranks/2d/unranked.svg"
							alt="Ranked tier"
						/>
					</div>

					<div className="followed-player-division">
						<p className="division-and-lp">Diamond X - 48 LP</p>
						<p className="win-loss">43% WR (403W-202L)</p>
					</div>

				</div>

			</div>
			<UnfollowButton summoner={summoner} />
		</div>
	);
}

export default Summoner;