import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Contexts
import { TokenContext } from "../contexts/TokenContext";

const LogoutButton = () => {
	const navigate = useNavigate();
	const { token, setNewToken } = useContext(TokenContext);

	const handleLogout = async (e) => {
		e.preventDefault();
		// Fetch to the /logout path, destructure the message from the response
		const { message } = await (await fetch("/api/logout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				credentials: "include",
				authorization: `Bearer ${token}`
			}
		})).json();
		// If the response contains a message, clear the access token and refresh the page
		if (message) {
			setNewToken("");
			navigate("/", { replace: true });
		}
	};

	return (
		<button className="logout-button" onClick={(e) => handleLogout(e)}>Log Out</button>
	);
};

export default LogoutButton;