import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Me = () => {
    const [following, setFollowing] = useState([])
    const [forbidden, setForbidden] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("slup")) {
            setForbidden("You're not supposed to be here >:(");
        }
    }, [])

    const handleSummoners = async (e, user) => {
        e.preventDefault();

        const token = localStorage.getItem("slup");
        console.log(token);
        try {
            const following = await fetch("/me", {
                method: "GET", 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await following.json();
            console.log(data);
            if (data?.following?.length) {
                setFollowing(data.following)
            } else {
                setFollowing(["You're not following anyone"]);
            }
            
            
        } catch(err) {
            console.log(err);
        }
    }

    return ( 
        <div>
            <Link to="/login">
                <p style={{
                    fontSize: "1rem",
                    margin: "1rem",
                    color: "white"
                }}>Go to Login</p>
            </Link>
            <button onClick={handleSummoners} style={{
                width: "200px",
                height: "100px",
                fontSize: "2rem"
            }}>Click me</button>

            {forbidden && <p>{forbidden}</p>}

            {following && following.map((summoner) => (
                <div >{summoner}</div>
            ))}
        </div>
     );
}
 
export default Me;