import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import Summoner from "../components/Summoner";


const Me = () => {
  const [summoners, setSummoners] = useState([]);
  const { token } = useContext(TokenContext);

  // Check if the access token is valid, let the user to the page depending if it is not not
  useEffect(() => {
    ;(async function verifyUser() {
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
        } else {
          setSummoners([]);
        }
    })();
  }, [token])

  // render the list of followers, not following or access denied
  return ( 
    <div>
      <Link to="/"><p>GO BACK HOME</p></Link>
      <Link to="/me/delete"><p>Want to delete your account?</p></Link>
      {summoners && summoners.map(summoner => (
          <Summoner key={summoner._id} summoner={summoner}/>
          ))
      }
      {summoners.length === 0 && <p>You're not following anyone</p>}
      
      
      
    </div> 
  );
}
 
export default Me;