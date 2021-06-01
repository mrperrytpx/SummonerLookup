import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import DeleteUser from "./pages/DeleteUser";
import Player from "./pages/Player"; 
import PlayerChampionStats from "./pages/PlayerChampionStats.jsx";
// Contexts
import { TokenContext } from "./contexts/TokenContext";
import { LoggedInContext } from "./contexts/LoggedInContext";
import PlayerContextProvider from "./contexts/PlayerContext";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true)
  const { isLoggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { setNewToken } = useContext(TokenContext);

  // Give the user a new access token if there's a refresh token stored in cookies
  useEffect(() => {
    const abortCont = new AbortController();
    (async () => {
      const response = await fetch("/api/refresh_token", {
        method: "POST",
        credentials: "include",
        signal: abortCont.signal
      })
      if (!response.ok) throw new Error("Couldn't fetch refresh token");
      const { accessToken } = await response.json();
      if (accessToken) setLoggedIn(true);
      setNewToken(accessToken);
      setLoading(false);
    })();
    return () => abortCont.abort();
  }, [setLoggedIn, setNewToken])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <QueryClientProvider client={queryClient}>
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
              <PlayerContextProvider>
                <Route exact path="/:region/:server/:summonerName">
                  <Player />
                </Route>
                <Route exact path="/:region/:server/:summonerName/stats">
                  <PlayerChampionStats />
                </Route>
              </PlayerContextProvider>
            </Switch>
          </div>
        </div>  
      </Router>
    </QueryClientProvider>
  );
}

export default App;
