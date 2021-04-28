import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye }from "react-icons/ai";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [passwordField, setPasswordField] = useState("password");

  const handleLogin = (e) => {
    e.preventDefault();
  }
  
  const handleVisibility = (e) => {
    e.preventDefault();
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
    <section className="input-section">
      <form onSubmit={handleLogin}>

        <Link to="/"><h3>SummonerLookup™</h3></Link>

        <label htmlFor="email">Email:</label>
        <input
          autoComplete="true"
          required
          id="email" 
          name="email" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="username">Username:</label>
        <input
          autoComplete="true"
          required
          id="username" 
          name="username" 
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        
        <label htmlFor="password">Password:</label>
        <div className="password-field">
          <input 
            autoComplete="true"
            required
            id="password" 
            name="password" 
            type={passwordField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            tabIndex="-1"
            className="show-password"
            onClick={handleVisibility}
          >{isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}</button>
        </div>

        <label htmlFor="repeat-password">Repeat password:</label>
        <input
          autoComplete="true"
          required
          id="repeat-password" 
          name="repeat-password" 
          type={passwordField}
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <button className="login-button">Register</button>

        <Link to="/login">
          <p className="login-link">Already have an account?</p>
        </Link>
      </form>
    </section>
    );
  }
 
export default Register;