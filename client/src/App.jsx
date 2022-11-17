import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Components

import GlobalStyles from "./misc/globalStyles";
// views

import { Home, Me, Summoner, SignIn, SignUp } from "./components/pages";
import { SummonerOverview } from "./components/organisms/SummonerOverview/SummonerOverview";
import { SummonerLiveGame } from "components/organisms/SummonerLiveGame/SummonerLiveGame";
import { SummonerChampionStats } from "components/organisms/SummonerChampionStats/SummonerChampionStats";

import ProtectedRoute from "./utils/ProtectedRoute";
// Contexts
import { useAuth } from "./hooks/useAuth";

import { useGetLeagueChampions } from "./hooks/useGetLeagueChampions";
import { useScreenSize } from "./hooks/useScreenSize";

import { WithNav } from "./components/templates/WithNav";
import { WithoutNav } from "./components/templates/WithoutNav";
import { FullscreenLoading } from "./components/atoms/FullscreenLoading/FullscreenLoading";
import { useGetFollowingQuery } from "./hooks/useGetFollowingQuery";
import { useGetLeagueChallengesQuery } from "./hooks/useGetLeagueChallengesQuery";
import { useGetLeagueItemsQuery } from "hooks/useGetLeagueItemsQuery";
import { useGetLeagueRunesQuery } from "hooks/useGetLeagueRunesQuery";
import { useGetLeagueSummonerSpellsQuery } from "hooks/useGetLeagueSummonerSpellsQuery";

const App = () => {
	const { accessToken, tokenLoading } = useAuth();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { width } = useScreenSize();

	const { isLoading: challengesLoading } = useGetLeagueChallengesQuery();
	const { isLoading: championsLoading } = useGetLeagueChampions();
	// const { isLoading: itemsLoading } = useGetLeagueItemsQuery();
	const { isLoading: runesLoading } = useGetLeagueRunesQuery();
	const { isLoading: summonerSpellsLoading } = useGetLeagueSummonerSpellsQuery();
	useGetFollowingQuery();
	const handleNavOpen = () => setIsNavOpen(prev => !prev);

	useEffect(function closeNav() {
		if (width >= 750 && isNavOpen) setIsNavOpen(false);
	}, [width, isNavOpen, setIsNavOpen]);

	if (tokenLoading || challengesLoading || championsLoading || runesLoading || summonerSpellsLoading) return <FullscreenLoading />;

	return (
		<div className="App">
			<GlobalStyles isNavOpen={isNavOpen} />
			<Routes>

				<Route element={<WithNav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />}>

					<Route path="/" element={<Home />} />

					<Route path="/:server/:summonerName" element={<Summoner />}>
						<Route index element={<SummonerOverview />} />
						<Route path="stats" element={<SummonerChampionStats />} />
						<Route path="live-game" element={<SummonerLiveGame />} />
					</Route>

					<Route element={<ProtectedRoute redirectPath="/signin" isAllowed={!!accessToken} />}>
						<Route path="/me" element={<Me />} />
					</Route>

				</Route>

				<Route element={<WithoutNav />}>

					<Route element={<ProtectedRoute redirectPath="/" isAllowed={!accessToken} />}>
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>

				</Route>
			</Routes>
		</div>
	);
};

export default App;
