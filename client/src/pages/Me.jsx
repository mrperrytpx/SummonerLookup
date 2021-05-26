import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import Summoner from "../components/Summoner";

const Me = () => {
  const [summoners, setSummoners] = useState(null);
  const { token } = useContext(TokenContext);

  // Check if the access token is valid, let the user to the page depending if it is not not
  useEffect(() => {
    ;(async () => {
        try {
          const response = await fetch("/me", {
            method: "GET",
            headers: { 
              "Content-Type": "application/json",
              credentials: "include",
              authorization: `Bearer ${token}`
            }
          });

          if (!response.ok) throw new Error("Couldn't fetch following list");

          const data = await response.json();
          if (!data.length) throw new Error("Not following anyone");

          setSummoners(data); 
        } catch (err) {
          setSummoners([]);
        }
    })();
  }, [token])

  // render the list of followers, not following or access denied
  return ( 
    <div className="following">
      <Link to="/me/delete"><p>Want to delete your account?</p></Link>
      {summoners && summoners.map(summoner => (
          <Summoner key={summoner._id} summoner={summoner}/>
          ))
      }
      {!summoners && <p>You're not following anyone</p>}  
    </div> 
  );
}
 
export default Me;