// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Me from "./Me";
import Register from "./Register";

const App = () => {
  /* const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/refresh_token", { method: "POST", credentials: "include" })
    .then(async x => {
      const data = await x.json();
      console.log(data);
      setLoading(false);
    });
  }, [])

  if (loading) {
    return <div>Loading...</div>
  } */

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/register"><Register /></Route>
            <Route path="/me"><Me /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
