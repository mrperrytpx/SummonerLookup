import { useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// Components
import Navbar from "./components/old/Navbar";
// views

import Home from "./components/pages/Home";

import Login from "./views/Login";
import Register from "./views/Register";
import Me from "./views/Me";
import DeleteUser from "./views/DeleteUser";
import Player from "./views/Player";

import ProtectedRoute from "./utils/ProtectedRoute";
// Contexts
import { TokenContext } from "./contexts/TokenContext";
import { LoggedInContext } from "./contexts/LoggedInContext";
import useAuth from "./hooks/useAuth";

import useGetLeagueChampions from "./hooks/useGetLeagueChampions";


const App = () => {
	const [loading, setLoading] = useState(true);
	const auth = useAuth();

	const { isLoggedIn, setLoggedIn } = useContext(LoggedInContext);
	const { setNewToken } = useContext(TokenContext);

	// Give the user a new access token if there's a refresh token stored in cookies
	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			const response = await fetch("/api/auth/refresh_token", {
				method: "POST",
				credentials: "include",
				signal: controller.signal
			});
			if (!response.ok) setNewToken("");
			const { accessToken } = await response.json();
			console.log("Access token:", accessToken);
			if (accessToken) setLoggedIn(true);

			setNewToken(accessToken);
			setLoading(false);
		})();
		// return () => controller.abort(); 
		// ^ BREAKS REFRESH-TOKEN WITH STRICTMODE (ONLY DURING DEV) BECAUSE USEEFFECT RUNS TWICE
		// XD
	}, [setLoggedIn, setNewToken]);


	useGetLeagueChampions();

	if (loading) return <div>Loading...</div>;

	return (
		<div className="App">
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
