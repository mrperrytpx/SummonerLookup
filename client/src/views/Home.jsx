// Components
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => {
	return (
		<div className="home">
			<SearchBar />
			<Link to="/login">GO TO LOGIN</Link>
			<Link to="/me">GO TO PROFILE</Link>
		</div>
	);
};

export default Home;
