import { useContext } from "react";
import { Link } from "react-router-dom";
// Contexts
import { LoggedInContext } from "../contexts/LoggedInContext";
// Components
import LogoutButton from "./LogoutButton";

const Navbar = () => {
	const { isLoggedIn } = useContext(LoggedInContext);

	// display different links depending if the user is logged in or not
	return (
		<nav className="nav">
			<Link to="/"><div className="logo">SummonerLookup™</div></Link>
			{!isLoggedIn && <Link to="/login"><p>Log In</p></Link>}
			{isLoggedIn && <Link to="/me"><p>My Profile</p></Link>}
			{isLoggedIn && <LogoutButton />}
		</nav>
	);
}

export default Navbar;