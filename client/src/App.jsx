import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setAccessToken } from "./accessToken"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import DeleteUser from "./pages/DeleteUser";
import Players from "./pages/Players";
import Navbar from "./components/Navbar";
import { LoggedInContext } from "./contexts/LoggedInContext";
import PlayerContextProvider from "./contexts/PlayerContext";

const App = () => {
  const [loading, setLoading] = useState(true)
  const { setLoggedIn } = useContext(LoggedInContext);

  // Give the user a new access token if there's a refresh token stored in cookies
  useEffect(() => {
    fetch("/refresh_token", { method: "POST", credentials: "include" })
    .then(async x => {
      const { accessToken } = await x.json();
      // If there's an access token, set the login to true for a different Navbar
      if (accessToken) {
        setLoggedIn(true);   
      } 
      setAccessToken(accessToken);
      setLoading(false);
      
    });
  }, [setLoggedIn])

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
              <Route exact path="/login"><Login /></Route>
              <Route exact path="/register"><Register /></Route>
              <Route exact path="/me"><Me /></Route>
              <Route exact path="/me/delete"><DeleteUser /></Route>
              <Route exact path="/search/:region/:server/:summonerName">
                <PlayerContextProvider>
                  <Players />
                </PlayerContextProvider>
              </Route>
            </Switch>
          </div>
        </div>  
    </Router>
  );
}

export default App;
