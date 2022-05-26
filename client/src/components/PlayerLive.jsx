import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

const fetchLiveGame = async (server, summonerId) => {
	const controller = new AbortController();
	const promise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(`/api/summoner/live_game/${server}/${summonerId}`, {
				method: "GET",
				signal: controller.signal
			});
			if (!response.ok) reject(new Error("Player isn't currently in a game"));
			const data = await response.json();
			resolve(data);
		} catch (error) {
			if (error?.name === "AbortError") reject(new Error("Request aborted"));
		}
	});
	promise.cancel = () => controller.abort();
	return promise;
};


const PlayerLive = () => {
	const { region, server, summonerName } = useParams();
	const queryClient = useQueryClient();
	const summoner = queryClient.getQueryData(["player", region, server, summonerName.toLowerCase()]);
	const { data, error, isError, isLoading } = useQuery(
		["live-game", server, summoner.accountData.summonerId],
		() => fetchLiveGame(server, summoner.accountData.summonerId),
		{
			onSuccess: (data) => console.log(data)
		});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>There was an error: {error.message}</div>;
	}

	return (
		<div>
			<p>{JSON.stringify(data, null, 2)}</p>
		</div>
	);
};

export default PlayerLive;