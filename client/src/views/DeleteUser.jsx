import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Contexts
import { TokenContext } from "../contexts/TokenContext";
import { LoggedInContext } from "../contexts/LoggedInContext";

const DeleteUser = () => {
	const { token, setNewToken } = useContext(TokenContext);
	const { setLoggedIn } = useContext(LoggedInContext);

	const navigate = useNavigate();

	const handleDelete = async (token) => {
		try {
			const response = await fetch("/api/user/delete_account", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					credentials: "include",
					authorization: `Bearer ${token}`
				},
			});
			if (!response.ok) throw new Error("Something went wrong");

			if (response.status === 204) {
				setLoggedIn(() => false);
				setNewToken("");
				navigate("/");
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<h2>Are you sure you want to delete your account?</h2>
			<div>
				<button onClick={() => handleDelete(token)}>YES</button>
				<button onClick={() => navigate("/")}>HOME</button>
			</div>
		</div>
	);
};

export default DeleteUser;