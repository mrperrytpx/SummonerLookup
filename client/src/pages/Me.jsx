import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAccessToken } from "../accessToken";
import Summoner from "../components/Summoner";


const Me = () => {
  const history = useHistory();
  const [summoners, setSummoners] = useState([]);
  const [allowed, setAllowed] = useState("");

  // Check if the access token is valid, let the user to the page depending if it is not not
  useEffect(() => {
    ;(async function verifyUser() {
      const token = getAccessToken();
        const { following } = await(await fetch("/me", {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            credentials: "include",
            authorization: `Bearer ${token}`
          }
        })).json()
        if (following) {
          setSummoners(following);
          setAllowed("");
        } else {
          setSummoners([]);
          setAllowed("Access Denied");
        }
    })();
  }, [history])

  // render the list of followers, not following or access denied
  return ( 
    <div>
      <Link to="/"><p>GO BACK HOME</p></Link>
      {allowed && <p>{allowed}</p>}
      <Link to="/me/delete"><p>Want to delete your account?</p></Link>
      {summoners && summoners.map(summoner => (
        <Summoner key={summoner._id} summoner={summoner}/>
        ))}
      {summoners.length === 0 && <p>You're not following anyone</p>}
      
    </div> 
  );
}
 
export default Me;