import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setAccessToken } from "./accessToken"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import DeleteUser from "./pages/DeleteUser";

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/refresh_token", { method: "POST", credentials: "include" })
    .then(async x => {
      const { accessToken } = await x.json();
      //console.log(accessToken);
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/me"><Me /></Route>
            <Route exact path="/me/delete"><DeleteUser /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
