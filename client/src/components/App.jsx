import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/register"><Register /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
