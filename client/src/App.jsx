import { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
// Components

import GlobalStyles from "./misc/globalStyles";
import Navbar from "./components/old/Navbar";
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

	if (loading) return <div>Loading...</div>;

	return (
		<div className="App">
			<GlobalStyles />
			{/* <Navbar /> */}
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />

					<Route element={<ProtectedRoute redirectPath="/" isAllowed={!auth.user} />}>
						<Route path="/signin" element={<Login />} />
						<Route path="/signup" element={<Register />} />
					</Route>

					<Route element={<ProtectedRoute redirectPath="/login" isAllowed={!!auth.user} />}>
						<Route path="/me" element={<Me />} />
						<Route path="/me/delete" element={<DeleteUser />} />
					</Route>

					<Route path="/:region/:server/:summonerName" element={<Player />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
