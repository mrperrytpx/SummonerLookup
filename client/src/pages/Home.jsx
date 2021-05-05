import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { getAccessToken } from "../accessToken";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		;(async function verifyUser() {
			const token = getAccessToken();
			if (token) {
				const isLogged = await (await fetch("/is_logged_in", {
					method: "POST",
					headers: { 
						"Content-Type": "application/json",
						credentials: "include",
						authorization: `Bearer ${token}`
				}
				})).json();
				if (isLogged) {
					setIsLoggedIn(true);
				} else {
					setIsLoggedIn(false);
				}
        
			}
		})();
	})

  return ( 
    <div className="home">
      <Navbar isLoggedIn={isLoggedIn}/>
      <SearchBar />
    </div>
  );
}
 
export default Home;