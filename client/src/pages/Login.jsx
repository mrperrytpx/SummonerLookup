import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// Contexts
import { LoggedInContext } from "../contexts/LoggedInContext";
import { TokenContext } from "../contexts/TokenContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [passwordField, setPasswordField] = useState("password");

	const [error, setError] = useState("");
	const { setLoggedIn } = useContext(LoggedInContext);
	const { setNewToken } = useContext(TokenContext);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const info = { username, password };
		const response = await fetch(`/api/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(info),
		});

		if (300 < response.status < 500) {
			setError("Invalid username of password");
		}

		const data = await response.json();
		const { accessToken } = data;
		if (accessToken) {
			setLoggedIn(() => true);
			setNewToken(() => accessToken);
			navigate("/");
		}
	};


	const handleVisibility = (e) => {
		e.preventDefault();
		setIsVisible(!isVisible);
		if (isVisible === false) {
			setPasswordField("text");
			setIsVisible(true);
		} else {
			setPasswordField("password");
			setIsVisible(false);
		}
	};

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

				{error && <p>{error}</p>}

				<button className="login-button">Log In</button>

				<Link to="/register">
					<p className="register-link">Don't have an account?</p>
				</Link>
			</form>
		</section>
	);
};

export default Login;