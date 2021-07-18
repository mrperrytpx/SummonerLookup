// Components
import { PrivateRoute } from "../components/PrivateRoute";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <PrivateRoute />
    </div>
  );
}

export default Home;