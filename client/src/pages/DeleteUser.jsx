import { getAccessToken, setAccessToken } from "../accessToken";
import { useState, useEffect } from "react";

const DeleteUser = () => {
  const [allowed, setAllowed] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
  ;(async function verifyUser() {
    const token = getAccessToken();
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
    e.preventDefault();
    const token = getAccessToken();
    const { message } = await(await fetch("/delete", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        authorization: `Bearer ${token}`
      }, 
    })).json();
    if (message) setDeleted(true);
  }
  
  if (!allowed) return (<div>Not Authorized</div> )

  return (
    <div>
      <h2>Are you sure you want to delete your account?</h2>
      <div>
        <button onClick={handleDelete}>YES</button>
      </div>
      {deleted && <p>User successfully deleted</p>}
    </div>
  );
}
 
export default DeleteUser;