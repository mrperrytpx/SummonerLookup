import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="nav">
            <div className="logo">SummonerLookup™</div>
            <Link to="/login"><p>Log In</p></Link>
        </nav>
     );
}
 
export default Navbar;