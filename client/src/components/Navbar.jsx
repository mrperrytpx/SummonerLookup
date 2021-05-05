import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Navbar = ({isLoggedIn}) => {

  return ( 
    <nav className="nav">
      <div className="logo">SummonerLookup™</div>
      {!isLoggedIn && <Link to="/login"><p>Log In</p></Link>}
      {isLoggedIn && <Link to="/me"><p>My Profile</p></Link>}
      {isLoggedIn && <LogoutButton />}
    </nav>
  );
}
 
export default Navbar;