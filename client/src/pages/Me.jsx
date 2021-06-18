import { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import Summoner from "../components/Summoner";
import { useQuery } from "react-query";

const getFollowing = async (token) => {
  try {
    const response = await fetch("/api/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) throw new Error("Couldn't fetch following list");

    const data = await response.json();
    return data;
  } catch (err) { }
}

const Me = () => {
  const { token } = useContext(TokenContext);

  // Get who user follows
  const { data } = useQuery(
    ["me", token],
    () => getFollowing(token),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

  // render the list of followers, not following or access denied
  return (
    <div className="following">
      <Link to="/me/delete"><p>Want to delete your account?</p></Link>
      <div className="followed-players">
        {
          data && data.map(summoner => (
            <Summoner key={summoner._id} summoner={summoner} />
          ))
        }
      </div>
      {!data?.length && <p>You're not following anyone</p>}
    </div>
  );
}

export default Me;