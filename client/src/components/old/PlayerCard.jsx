import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
// Contexts
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { TokenContext } from "../../contexts/TokenContext";

const PlayerCard = () => {
	const queryClient = useQueryClient();
	const { region, server, summonerName } = useParams();
	const { accountData } = queryClient.getQueryData(["player", region, server, summonerName.toLowerCase()]);
	const version = queryClient.getQueryData(["version"]);
	const [buttonState, setButtonState] = useState("FOLLOW");

	const { isLoggedIn } = useContext(LoggedInContext);
	const { token } = useContext(TokenContext);


	const handleFollow = async () => {
		const controller = new AbortController();
		const payload = {
			summonerName: accountData?.summonerName,
			region: accountData?.region,
			server: accountData?.server,
			puuid: accountData?.puuid,
			summonerId: accountData?.summonerId
		};
		try {
			const response = await fetch(`/api/summoner/follow_summoner`, {
				method: "POST",
				signal: controller.signal,
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(payload),
			});
			if (!response.ok) {
				throw new Error("Couldn't follow player");
			} else {
				setButtonState(() => "FOLLOWED!");

			}

		} catch (err) {
			err.name === "AbortError" ? console.log("Fetch aborted") : console.log(err);
		}
		return () => controller.abort();
	};

	return (
		<div className="summoner">

			<div className="summoner-icon">
				<img
					className="player-summoner-icon"
					src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${accountData?.profileIconId}.png`}
					alt="Summoner's icon"
				/>
				<div className="player-account-level">{accountData?.summonerLevel}</div>
			</div>

			<div className="name-wrapper">

				<div className="player-name">
					<p className="summoner-name">{accountData?.summonerName}</p>
				</div>

				<div className="follow-summoner">
					<button disabled={!isLoggedIn} onClick={() => handleFollow()} className="follow">{buttonState}</button>
				</div>

			</div>

		</div>
	);
};

export default PlayerCard;