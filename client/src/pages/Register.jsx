import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye }from "react-icons/ai";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [passwordField, setPasswordField] = useState("password");
  
  const [isPasswordsMatching, setIsPasswordsMatching] = useState(true);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Check if the password match in both fields
    if (password.toString() !== repeatPassword.toString()) {
      setIsPasswordsMatching(false);
      return;
    }
    //Check if the password is at least 8 characters long
    if (password.toString().length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    // Check if the username field passed the regex test ( Doesn't work properly for some reason )
    const usernameRegex = /^[a-zA-z0-9_-]+/g;
    if (!usernameRegex.test(username)) {
      setError("Username must only contain letters (a-z), numbers(0-9) or a dash(-) or underscore(_)");
      return;
    }
    // Check if the username is at least 3 characters long
    if (username.length < 3) {
      setError("Username must be at least 3 characters long");
      return;
    }
    setError("");

    // If all the info is validated, send the info to the /register path to create a user
    const info = {
      email,
      username,
      password,
    }
    try {
      const response = await fetch(`/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
      });
      const data = await response.json();
      // SETUP ROUTING TO /LOGIN EVENTUALLY
      console.log(data);
      history.push("/login");
    } catch(err) {
      console.log(err);
    }
  }
  
  // Toggle type for password field to "hide/show"
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
      <form onSubmit={handleRegister}>

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

        {!isPasswordsMatching && <p>Passwords aren't matching</p>}
        {error && <p>{error}</p>}

        <button className="login-button">Register</button>

        <Link to="/login">
          <p className="login-link">Already have an account?</p>
        </Link>
      </form>
    </section>
    );
  }
 
export default Register;