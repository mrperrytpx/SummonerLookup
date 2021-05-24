import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

const LogoutButton = () => {
  const history = useHistory();
  const { token, setNewToken } = useContext(TokenContext);

  const handleLogout = async (e) =>{
    e.preventDefault();
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
      setNewToken("");
      history.go(0);
    }
  }

  return ( 
    <button className="logout-button" onClick={handleLogout}>Log Out</button>
  );
}
 
export default LogoutButton;