import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAccessToken } from "../accessToken";
import Summoner from "./Summoner";


const Me = () => {
	const history = useHistory();
	const [summoners, setSummoners] = useState(null);
	const [allowed, setAllowed] = useState("");

	useEffect(() => {
		;(async function verifyUser() {
			const token = getAccessToken();
			if (!token) {
				setAllowed("Access Denied");
				history.push("/login");
				return;
			}
			const { following } = await(await fetch("/me", {
				method: "GET",
				headers: { 
					"Content-Type": "application/json",
					credentials: "include",
					authorization: `Bearer ${token}`
				}
			})).json()
			if (following) {
				setSummoners(following);
				setAllowed("");
			}
		})();
	}, [])

	return ( 
		<div>
			<Link to="/"><p>GO BACK HOME</p></Link>
			{allowed && <p>{allowed}</p>}
			{summoners && summoners.map(summoner => (
				<Summoner key={summoner._id} summoner={summoner}/>
				))}
		</div> 
	);
}
 
export default Me;