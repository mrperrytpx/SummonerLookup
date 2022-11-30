import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./styled/globalStyles";
import ProtectedRoute from "./utils/ProtectedRoute";

import { WithNav } from "./components/templates/WithNav";
import { WithoutNav } from "./components/templates/WithoutNav";

import { Home, Me, SignIn, SignUp, Summoner } from "components/pages/";
import { SummonerOverview } from "./components/organisms/SummonerOverview/SummonerOverview";
import { SummonerChampionStats } from "components/organisms/SummonerChampionStats/SummonerChampionStats";
import { SummonerLiveGame } from "components/organisms/SummonerLiveGame/SummonerLiveGame";
import { SummonerChallenges } from "components/organisms/SummonerChallenges/SummonerChallenges";

import { useAuth } from "./hooks/useAuth";
import { useGetLeagueChampions } from "./hooks/useGetLeagueChampions";
import { useScreenSize } from "./hooks/useScreenSize";
import { useGetLeagueRunesQuery } from "hooks/useGetLeagueRunesQuery";
import { useGetLeagueSummonerSpellsQuery } from "hooks/useGetLeagueSummonerSpellsQuery";
import { useGetFollowingQuery } from "./hooks/useGetFollowingQuery";
import { useGetLeagueChallengesQuery } from "./hooks/useGetLeagueChallengesQuery";

import { FullscreenLoading } from "./components/atoms/FullscreenLoading/FullscreenLoading";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";
import { Container } from "components/atoms/Container/Container";

const App = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const { width } = useScreenSize();
	const { accessToken, tokenLoading } = useAuth();

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
						<Route path="challenges" element={<SummonerChallenges />} />
					</Route>
					<Route element={<ProtectedRoute redirectPath="/signin" isAllowed={!!accessToken} />}>
						<Route path="/me" element={
							<Suspense fallback={
								<Container>
									<LoadingIndicator center={true} />
								</Container>
							}>
								<Me />
							</Suspense>
						} />
					</Route>
				</Route>
				<Route element={<WithoutNav />}>
					<Route element={<ProtectedRoute redirectPath="/" isAllowed={!accessToken} />}>
						<Route path="/signin" element={
							<Suspense fallback={
								<Container>
									<LoadingIndicator center={true} />
								</Container>
							}>
								<SignIn />
							</Suspense>
						} />

						<Route path="/signup" element={
							<Suspense fallback={
								<Container>
									<LoadingIndicator center={true} />
								</Container>
							}>
								<SignUp />
							</Suspense>
						} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
