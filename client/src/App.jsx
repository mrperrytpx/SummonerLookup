import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
// Components

import GlobalStyles from "./misc/globalStyles";
// views

import { Home, Me, Summoner, SignIn, SignUp } from "./components/pages";

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

const App = () => {
	const { accessToken, tokenLoading } = useAuth();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { width } = useScreenSize(setIsNavOpen);
	const { isLoading: challengesLoading } = useGetLeagueChallengesQuery();
	const { isLoading: championsLoading } = useGetLeagueChampions();
	useGetFollowingQuery();
	const handleNavOpen = () => setIsNavOpen(prev => !prev);

	useEffect(function closeNav() {
		if (width >= 750 && isNavOpen) setIsNavOpen(false);
	}, [width, isNavOpen, setIsNavOpen]);

	if (tokenLoading || challengesLoading || championsLoading) return <FullscreenLoading />;

	return (
		<div className="App">
			<GlobalStyles />
			<Routes>

				<Route element={<WithNav width={width} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />}>

					<Route path="/" element={<Home />} />

					<Route path="/:server/:summonerName" element={<Summoner />}>
						<Route index element={<div style={{ color: "white" }}>OVERVIEW</div>} />
						<Route path="stats" element={<div style={{ color: "white" }}>STATS</div>} />
						<Route path="live-game" element={<div style={{ color: "white" }}>LIVE GAME</div>} />
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
			<ReactQueryDevtools initialIsOpen={false} />
		</div>
	);
};

export default App;
