import { useContext } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { LoggedInContext } from "../contexts/LoggedInContext";

const Navbar = () => {
  const { isLoggedIn } = useContext(LoggedInContext);

  // display different links depending if the user is logged in or not
  return ( 
    <nav className="nav">
      <Link to="/"><div className="logo">SummonerLookup™</div></Link>
      {!isLoggedIn && <Link to="/login"><p>Log In</p></Link>}
      {isLoggedIn && <Link to="/me"><p>My Profile</p></Link>}
      {isLoggedIn && <LogoutButton />}
    </nav>
  );
}
 
export default Navbar;