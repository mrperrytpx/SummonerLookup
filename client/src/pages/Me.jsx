import { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
// Contexts
import { TokenContext } from "../contexts/TokenContext";
// Components
import Summoner from "../components/Summoner";

const getFollowing = async (token) => {
	const abortCont = new AbortController();
	try {
		const response = await fetch("/api/me", {
			method: "GET",
			signal: abortCont.signal,
			headers: {
				"Content-Type": "application/json",
				credentials: "include",
				authorization: `Bearer ${token}`
			}
		});
		console.log("Response: ", response);

		if (!response.ok) {
			const { message } = await response.json();
			throw new Error(message);
		}
		const data = await response.json();
		console.log("Data: ", data);
		return data;
	} catch (err) {
		console.log(err);
	}
	return () => abortCont.abort();
}

const Me = () => {
	const { token } = useContext(TokenContext);

	// Get who user follows
	const { data } = useQuery(
		["me"],
		() => getFollowing(token),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			onSuccess: data => console.log(data)
		}
	);

	// render the list of followers, not following or access denied
	return (
		<div className="following">
			<Link to="/me/delete"><p>Want to delete your account?</p></Link>
			<div className="followed-players">
				{
					data && data.map(summoner => (
						<Summoner key={summoner._id} summoner={summoner} />
					))
				}
			</div>
			{!data?.length && <p>You're not following anyone</p>}
		</div>
	);
}

export default Me;