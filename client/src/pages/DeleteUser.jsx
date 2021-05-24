import { TokenContext } from "../contexts/TokenContext";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"; 

const DeleteUser = () => {
  const [allowed, setAllowed] = useState(false);

  const { token, setNewToken } = useContext(TokenContext);
  const { setLoggedIn } = useContext(LoggedInContext);

  const history = useHistory();

  useEffect(() => {
  ;(async function verifyUser() {
    const { message } = await(await fetch("/is_logged_in", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        credentials: "include",
        authorization: `Bearer ${token}`
      }
    })).json()
    if (message) {
      setAllowed(true);
    } else {
      setAllowed(false);
    }
  })();
}, [])

  const handleDelete = async (e) => {
    const { message } = await(await fetch("/delete", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        authorization: `Bearer ${token}`
      }, 
    })).json();
    if (message) {
      setLoggedIn(() => false);
      setNewToken("");
      history.push("/");
    }
  }
  
  if (!allowed) return (<div>Not Authorized</div> )

  return (
    <div>
      <h2>Are you sure you want to delete your account?</h2>
      <div>
        <button onClick={handleDelete}>YES</button>
      </div>
    </div>
  );
}
 
export default DeleteUser;