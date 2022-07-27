import { useState } from "react";
import { Link } from "react-router-dom";
// Contexts
import useAuth from "../hooks/useAuth";
import { SvgLink } from "../components/atoms/SvgLink/SvgLink";

const Login = () => {

	const auth = useAuth();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [passwordField, setPasswordField] = useState("password");

	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		await auth.signIn(username, password);
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

				<SvgLink to="/" />
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
					></button>				</div>

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