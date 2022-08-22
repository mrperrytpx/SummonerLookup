import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
// Components

import GlobalStyles from "./misc/globalStyles";
// views

import { Home } from "./components/pages/Home/Home";

import Login from "./views/Login";
import Register from "./views/Register";
import Me from "./views/Me";
import DeleteUser from "./views/DeleteUser";
import Player from "./views/Player";

import ProtectedRoute from "./utils/ProtectedRoute";
// Contexts
import { useAuth } from "./hooks/useAuth";

import useGetLeagueChampions from "./hooks/useGetLeagueChampions";
import useScreenSize from "./hooks/useScreenSize";

import { WithNav } from "./components/templates/WithNav";
import { WithoutNav } from "./components/templates/WithoutNav";


const App = () => {
	const { accessToken } = useAuth();

	useGetLeagueChampions();

	const [isNavOpen, setIsNavOpen] = useState(false);
	const { width } = useScreenSize(setIsNavOpen);

	const handleNavOpen = () => {
		setIsNavOpen(prev => !prev);
	};

	useEffect(function closeNav() {
		if (width >= 750 && isNavOpen) setIsNavOpen(false);
	}, [width, isNavOpen, setIsNavOpen]);

	return (
		<div className="App">
			<GlobalStyles />
			<Routes>

				<Route element={<WithNav width={width} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />}>
					<Route path="/" element={<Home isNavOpen={isNavOpen} />} />
					<Route element={<ProtectedRoute redirectPath="/signin" isAllowed={!!accessToken} />}>
						<Route path="/me" element={<Me />} />
						<Route path="/me/delete" element={<DeleteUser />} />
					</Route>

					<Route path="/:server/:summonerName" element={<Player />} />
				</Route>

				<Route element={<WithoutNav />}>
					<Route element={<ProtectedRoute redirectPath="/" isAllowed={!accessToken} />}>
						<Route path="/signin" element={<Login />} />
						<Route path="/signup" element={<Register />} />
					</Route>
				</Route>

			</Routes>
			<ReactQueryDevtools initialIsOpen={false} />
		</div>
	);
};

export default App;
