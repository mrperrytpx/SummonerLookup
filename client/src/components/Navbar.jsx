import { Link } from "react-router-dom";
import { getAccessToken, setAccessToken } from "../accessToken";

const Navbar = () => {
	const handleLogout = async (e) =>{
		e.preventDefault();
		const token = getAccessToken();
		console.log(token);
		const { message } = await(await fetch("/logout", {
			method: "POST", 
			headers: { 
				"Content-Type": "application/json",
				credentials: "include",
				authorization: `Bearer ${token}`
			}
		})).json();
		if (message) setAccessToken("");
	}

	return ( 
		<nav className="nav">
			<div className="logo">SummonerLookup™</div>
			<Link to="/login"><p>Log In</p></Link>
			<Link to="/me"><p>My Profile</p></Link>
			<button onClick={handleLogout}>Log Out</button>
		</nav>
	);
}
 
export default Navbar;