import { useContext } from "react";
import { useHistory } from "react-router-dom";
// Contexts
import { TokenContext } from "../contexts/TokenContext";
import { LoggedInContext } from "../contexts/LoggedInContext";

const DeleteUser = () => {
  const { token, setNewToken } = useContext(TokenContext);
  const { setLoggedIn } = useContext(LoggedInContext);

  const history = useHistory();

  const handleDelete = async (e) => {
    const { message } = await (await fetch("/api/delete", {
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