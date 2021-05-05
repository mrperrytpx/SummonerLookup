import { getAccessToken, setAccessToken } from "../accessToken";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
	const history = useHistory();

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
		if (message) {
			setAccessToken("");
			history.go(0);
		}
	}

    return ( 
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
    );
}
 
export default LogoutButton;