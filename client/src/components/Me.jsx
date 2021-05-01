import { useState } from "react";

const Me = () => {
    const [following, setFollowing] = useState([])
    const [username, setUsername] = useState("");

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
            setFollowing(data.following)
            setUsername(data.username);
        }catch(err) {
            console.log(err);
        }
    }

    return ( 
        <div>
            <button onClick={handleSummoners} style={{
                width: "200px",
                height: "100px",
                fontSize: "2rem"
            }}>Click me</button>

            {username && <p>{username}</p>}

            {following && following.map((summoner) => (
                <div >{summoner}</div>
            ))}
        </div>
     );
}
 
export default Me;