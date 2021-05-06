import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { getAccessToken } from "../accessToken";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      ;(async function verifyUser() {
        // get the access token
        const token = getAccessToken();
        // if a token exists
        if (token) {
          // fetch to the /is_logged_in path to check if the user is already logged in
          const isLogged = await (await fetch("/is_logged_in", {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              credentials: "include",
              authorization: `Bearer ${token}`
            }
          })).json();
          // if the user is logged in, set isLoggedIn to true
          if (isLogged) {
            setIsLoggedIn(true);
          } else {
            // set isLoggedIn to false
            setIsLoggedIn(false);
          }
        }
      })(); // instantly initialize the function
    })

  // Send the isLoggedIn state to the Navbar
  return ( 
    <div className="home">
      <Navbar isLoggedIn={isLoggedIn}/>
      <SearchBar />
    </div>
  );
}
 
export default Home;