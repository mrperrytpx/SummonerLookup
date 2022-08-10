import { useAuth } from "../../hooks/useAuth";

// Contexts

const LogoutButton = () => {

	const { signOut } = useAuth();

	const handleLogout = async (e) => {
		e.preventDefault();
		console.log("Idk");
		await signOut();
		// }
	};

	return (
		<button className="logout-button" onClick={(e) => handleLogout(e)}>Log Out</button>
	);
};

export default LogoutButton;