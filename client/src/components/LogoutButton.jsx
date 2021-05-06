import { getAccessToken, setAccessToken } from "../accessToken";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = async (e) =>{
    e.preventDefault();
    // get the access token
    const token = getAccessToken();

    // Fetch to the /logout path, destructure the message from the response
    const { message } = await(await fetch("/logout", {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json",
        credentials: "include",
        authorization: `Bearer ${token}`
      }
    })).json();
    // If the response contains a message, clear the access token and refresh the page
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