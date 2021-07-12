import { useContext } from "react"
import { useMutation, useQueryClient } from "react-query";
// Contexts
import { TokenContext } from "../contexts/TokenContext";

const unfollowPlayer = async ({ id, token }) => {
    try {
        const response = await fetch(`/api/unfollow/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id })
        });
        if (!response.ok) throw new Error("Something went wrong");
    } catch (error) {
    }
}

const UnfollowButton = ({ summoner }) => {
    const queryClient = useQueryClient();
    const { token } = useContext(TokenContext);

    const { mutateAsync } = useMutation(unfollowPlayer, {
        onMutate: async (player) => {
            await queryClient.cancelQueries(["me"]);
            const previousFollowing = queryClient.getQueryData(["me", player.token])
            queryClient.setQueryData(
                ["me", player.token],
                (old) => old.filter((summ) => summ._id !== player.id));
            return { previousFollowing, player };
        },
        onError: (_err, _player, context) => {
            queryClient.setQueryData(["me", context.player.token], context.previousFollowing);
        }
    });

    return (
        <button onClick={() => mutateAsync({ id: summoner._id, token })}>Unfollow</button>
    )
}

export default UnfollowButton;