import { TokenContext } from "../contexts/TokenContext";
import { useContext } from "react"

const UnfollowButton = ({ summoner }) => {
    const { token } = useContext(TokenContext);
    const handleUnfollow = async (id) => {
        console.log(id, token);
        try {
            const response = await fetch(`/api/unfollow/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ id })
            })
        } catch (error) {
            console.log(`Something went wrong, ${error.message}`)
        }
    }

    return (
        <button onClick={() => handleUnfollow(summoner._id)}>{JSON.stringify(summoner)}</button>
    )
}

export default UnfollowButton;