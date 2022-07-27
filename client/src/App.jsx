import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
// Components

import GlobalStyles from "./misc/globalStyles";
import { Navbar } from "./components/organisms/Navbar/Navbar";
// views

import { Home } from "./components/pages/Home";

import Login from "./views/Login";
import Register from "./views/Register";
import Me from "./views/Me";
import DeleteUser from "./views/DeleteUser";
import Player from "./views/Player";

import ProtectedRoute from "./utils/ProtectedRoute";
// Contexts
import useAuth from "./hooks/useAuth";

import useGetLeagueChampions from "./hooks/useGetLeagueChampions";
import useScreenSize from "./hooks/useScreenSize";

import { WithNav } from "./components/templates/WithNav";
import { WithoutNav } from "./components/templates/WithoutNav";


const App = () => {
	const [loading, setLoading] = useState(true);
	const auth = useAuth();

	const executedRef = useRef(false);

	useEffect(function getTokens() {
		if (executedRef.current) { return; }

		auth.getFreshTokens();

		executedRef.current = true;
		setLoading(false);
	}, [auth.getFreshTokens]);

	useGetLeagueChampions();

	const [isNavOpen, setIsNavOpen] = useState(false);
	const { width } = useScreenSize(setIsNavOpen);

	const handleNavOpen = () => {
		setIsNavOpen(prev => !prev);
	};

	useEffect(function closeNav() {
		if (width >= 700 && isNavOpen) setIsNavOpen(false);
	}, [width, isNavOpen, setIsNavOpen]);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="App">
			<GlobalStyles />
			{/* <Navbar width={width} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} /> */}
			<Routes>

				<Route element={<WithNav width={width} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />}>
					<Route path="/" element={<Home isNavOpen={isNavOpen} width={width} />} />
					<Route element={<ProtectedRoute redirectPath="/login" isAllowed={!!auth.user} />}>
						<Route path="/me" element={<Me />} />
						<Route path="/me/delete" element={<DeleteUser />} />
					</Route>

					<Route path="/:server/:summonerName" element={<Player />} />
				</Route>

				<Route element={<WithoutNav />}>
					<Route element={<ProtectedRoute redirectPath="/" isAllowed={!auth.user} />}>
						<Route path="/signin" element={<Login />} />
						<Route path="/signup" element={<Register />} />
					</Route>
				</Route>

			</Routes>
		</div>
	);
};

export default App;
