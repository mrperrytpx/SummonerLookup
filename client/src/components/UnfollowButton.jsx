import { useContext } from "react"
import { useMutation, useQueryClient } from "react-query";
// Contexts
import { TokenContext } from "../contexts/TokenContext";

const unfollowPlayer = async ({ id, token }) => {
	const response = await fetch(`/api/ussnfollow/`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ id })
	});
	if (!response.ok) throw new Error("Something went wrong. Try again!");
	return response;
}

const UnfollowButton = ({ summoner }) => {
	const queryClient = useQueryClient();
	const { token } = useContext(TokenContext);

	const { mutate } = useMutation(unfollowPlayer,
		{
			onMutate: async ({ id }) => {
				await queryClient.cancelQueries(["me"]);
				const previousFollowing = queryClient.getQueryData(["me"])
				queryClient.setQueryData(
					["me"],
					(old) => old.filter((summ) => summ._id !== id));
				return { previousFollowing };
			},
			onError: (err, _player, context) => {
				console.log(err);
				queryClient.setQueryData(["me"], context.previousFollowing);
			}
		});

	return (
		<button onClick={() => mutate({ id: summoner._id, token })}>Unfollow</button>
	)
}

export default UnfollowButton;