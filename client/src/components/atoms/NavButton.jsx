import { Link } from "react-router-dom";

export default function NavButton(props) {

  if (props.use === "login") {
    return (
      <Link to="/login" className="link">Login</Link>
    );
  }

  if (props.use === "register") {
    return (
      <Link to="/register" className="link">Register</Link>

    );
  }
}
