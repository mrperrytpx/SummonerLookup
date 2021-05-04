import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { getAccessToken, setAccessToken } from "../accessToken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [passwordField, setPasswordField] = useState("password");
  const history = useHistory();

  useEffect(() => {
    const user = getAccessToken();
    console.log(user);
    if (user) history.push("/");
  }, [history])

  const handleLogin = async (e) => {
    e.preventDefault();

    const info = {
      username,
      password,
    }

    try {
      const login = await fetch(`/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
      });

      const { accessToken } = await login.json();
      setAccessToken(accessToken);
      history.push("/");
    } catch(err) {
      console.log(err);
    }
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

        <label htmlFor="username">Username:</label>
        <input
          autoComplete="true"
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
            autoComplete="true"
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