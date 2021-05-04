import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAccessToken } from "../accessToken";



const Me = () => {

    useEffect(() => {
        (async function verifyUser() {
            const token = getAccessToken();
            const user = await(await fetch("/verify_token", {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    credentials: "include",
                    authorization: `Bearer ${token}`
                }
            })).json()
            console.log(user);
        })();
    }, [])

    return ( 
        <div>
            <Link to="/"><p>GO BACK HOME</p></Link>
        </div>
        
     );
}
 
export default Me;