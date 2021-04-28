import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye }from "react-icons/ai";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [passwordField, setPasswordField] = useState("password");

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleVisibility = (e) => {
    setIsVisible(!isVisible);
    if (isVisible === false) {
      setPasswordField("text");
      setIsVisible(true)
    } else {
      setPasswordField("password");
      setIsVisible(false);
    }
  }

  return ( 
      <section className="login-section">
        <form onSubmit={handleLogin}>

          <Link to="/"><h3>SummonerLookup™</h3></Link>

          <label htmlFor="username">Username:</label>
          <input
          required
          id="username" 
          name="username" 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          
          <label htmlFor="password">Password:</label>
          <div className="password-field">
            <input 
            id="password"
            required
            name="password" 
            type={passwordField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button 
            className="show-password"
            onClick={handleVisibility}
            >{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</button>
          </div>

          <button className="login-button">Log In</button>

          <Link to="/register">
            <p className="register-link">Don't have an account?</p>
          </Link>
        </form>
      </section>
      );
  }
 
export default Login;