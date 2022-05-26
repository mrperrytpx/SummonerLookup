import { useReducer } from "react";
import { useParams } from "react-router";
import { useQuery, useQueryClient } from "react-query";
// Components
import PlayerCard from "../components/PlayerCard";
import PlayerNav from "../components/PlayerNav";
import Matches from "../components/Matches";
import PlayerOverview from "../components/PlayerOverview";
import PlayerRankedStats from "../components/PlayerRankedStats";
import PlayerLive from "../components/PlayerLive";

const fetchPlayer = (region, server, summonerName) => {
	const controller = new AbortController();
	// Only way I found how to properly cancel a react-query fetch request
	const promise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(`/api/summoner/search_summoner/${region}/${server}/${summonerName.toLowerCase()}`, {
				method: "GET",
				signal: controller.signal
			});
			if (!response.ok) reject(new Error("Problem fetching data"));
			const data = await response.json();
			console.log(data);
			resolve(data);
		} catch (error) {
			if (error?.name === "AbortError") reject(new Error("Request aborted"));
		}
	});
	promise.cancel = () => controller.abort();
	return promise;
};

const initialState = {
	isOverviewActive: true,
	isStatsActive: false,
	isLiveActive: false
};

const stateReducer = (state, action) => {
	switch (action.type) {
		case "OVERVIEW":
			return { ...state, isOverviewActive: true, isStatsActive: false, isLiveActive: false };
		case "STATS":
			return { ...state, isOverviewActive: false, isStatsActive: true, isLiveActive: false };
		case "LIVE":
			return { ...state, isOverviewActive: false, isStatsActive: false, isLiveActive: true };
		default:
			return state;
	}
};

const Players = () => {
	const queryClient = useQueryClient();
	const { region, server, summonerName } = useParams();
	const [state, dispatch] = useReducer(stateReducer, initialState);

	const { isLoading, isError } = useQuery(
		["player", region, server, summonerName.toLowerCase()],
		() => fetchPlayer(region, server, summonerName),
		{
			onError: () => {
				queryClient.cancelQueries("player");
			},
			onSuccess: (data) => {
				console.log(data);
			},
			refetchOnWindowFocus: false,
			retry: 0,
			staleTime: 30000
		}
	);

	if (isError) return (<div>No summoner</div>);

	if (isLoading) return (<div>Loading...</div>);

	return (
		<div className="container">
			<PlayerCard />
			<PlayerNav dispatch={dispatch} />
			{
				state.isOverviewActive &&
				<>
					<PlayerOverview />
					<Matches />
				</>
			}
			{
				state.isStatsActive &&
				<>
					<PlayerRankedStats />
				</>
			}
			{
				state.isLiveActive &&
				<>
					<PlayerLive />
				</>
			}
		</div>
	);
};

export default Players;