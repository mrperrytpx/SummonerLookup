import { useAuth } from "../../hooks/useAuth";

const LogoutButton = () => {

	const { signOut, accessToken } = useAuth();

	const handleLogout = async (e) => {
		e.preventDefault();
		await signOut.mutate({ accessToken });
	};

	return (
		<button className="logout-button" onClick={(e) => handleLogout(e)}>Log Out</button>
	);
};

export default LogoutButton;