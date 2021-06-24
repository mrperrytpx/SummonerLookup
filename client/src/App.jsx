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
import { LeagueVersionContext } from "./contexts/LeagueVersionContext";

const App = () => {
  const [loading, setLoading] = useState(true);

  const { isLoggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { setNewToken } = useContext(TokenContext);
  const { setLeagueVersion } = useContext(LeagueVersionContext);

  // Give the user a new access token if there's a refresh token stored in cookies
  useEffect(() => {
    const controller = new AbortController();
    const fetchToken = async () => {
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
    }
    fetchToken();
    return () => controller.abort();
  }, [setLoggedIn, setNewToken]);

  // Fetch latest game version so it's not hardcoded in
  useEffect(() => {
    const controller = new AbortController();
    const fetchGameVersion = async () => {
      const response = await fetch("http://ddragon.leagueoflegends.com/api/versions.json", {
        method: "GET",
        signal: controller.signal
      });
      if (!response.ok) throw new Error("test");
      const data = await response.json();
      setLeagueVersion(data[0]);
    }
    fetchGameVersion();
    return () => controller.abort();
  }, [setLeagueVersion]);

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
