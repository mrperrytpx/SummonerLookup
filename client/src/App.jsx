import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import DeleteUser from "./pages/DeleteUser";
import Player from "./pages/Player";
// Contexts
import { TokenContext } from "./contexts/TokenContext";
import { LoggedInContext } from "./contexts/LoggedInContext";
import { useQuery } from "react-query";

const fetchAllChampions = async (version) => {
	const controller = new AbortController();
	const promise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`, {
				method: "GET",
				signal: controller.signal
			});
			if (!response.ok) reject(new Error("Problem fetching data"));
			const data = await response.json();
			let map = new Map();
			for (let name in data.data) {
				map.set(data.data[name].key, name);
			}
			resolve(map);
		} catch (error) {
			if (error?.name === "AbortError") reject(new Error("Request aborted"));
		}
	});
	promise.cancel = () => controller.abort();
	return promise;
}

const fetchVersion = async () => {
	const controller = new AbortController();
	const promise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch("http://ddragon.leagueoflegends.com/api/versions.json", {
				method: "GET",
				signal: controller.signal
			});
			if (!response.ok) reject(new Error("Problem fetching data"));
			const data = await response.json();
			resolve(data[0]);
		} catch (error) {
			if (error?.name === "AbortError") reject(new Error("Request aborted"));
		}
	});
	promise.cancel = () => controller.abort();
	return promise;
}

const App = () => {
	const [loading, setLoading] = useState(true);

	const { isLoggedIn, setLoggedIn } = useContext(LoggedInContext);
	const { setNewToken } = useContext(TokenContext);

	// Give the user a new access token if there's a refresh token stored in cookies
	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			const response = await fetch("/api/refresh_token", {
				method: "POST",
				credentials: "include",
				signal: controller.signal
			});
			if (!response.ok) setNewToken("");
			const { accessToken } = await response.json();
			if (accessToken) setLoggedIn(true);
			setNewToken(accessToken);
			setLoading(false);
		})();
		return () => controller.abort();
	}, [setLoggedIn, setNewToken]);

	const { data } = useQuery(["version"], () => fetchVersion(), {
		staleTime: 900000,
		retry: 1,
		refetchOnWindowFocus: false
	});

	useQuery(["champions"], () => fetchAllChampions(data), {
		enabled: !!data,
		staleTime: 900000,
		retry: 1,
		refetchOnWindowFocus: false,
	});


	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/"><Home /></Route>
						<Route exact path="/login">
							{isLoggedIn ? <Redirect to="/" /> : <Login />}
						</Route>
						<Route exact path="/register">
							{isLoggedIn ? <Redirect to="/" /> : <Register />}
						</Route>
						<Route exact path="/me">
							{!isLoggedIn ? <Redirect to="/login" /> : <Me />}
						</Route>
						<Route exact path="/me/delete">
							{!isLoggedIn ? <Redirect to="/login" /> : <DeleteUser />}
						</Route>
						<Route exact path="/:region/:server/:summonerName">
							<Player />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
