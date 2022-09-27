import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "./useAuth";

export const useUnfollowSummonerMutation = () => {

    const { accessToken } = useAuth();
    const queryClient = useQueryClient();

    const unfollowSummoner = async ({ id }) => {
        console.log("DELETING PLAYER WITH ID:", id);
        const controller = new AbortController();
        const response = await fetch("/api/summoner/unfollow_summoner", {
            method: "PATCH",
            signal: controller.signal,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ id })
        });

        if (controller.signal.aborted) return;

        if (!response.ok) throw new Error("Something went wrong. Try again!");
        return response;
    };

    return useMutation(unfollowSummoner, {
        onMutate: async ({ id }) => {
            await queryClient.cancelQueries(["me"]);
            const previousFollowing = queryClient.getQueryData(["me"]);
            queryClient.setQueryData(
                ["me"],
                (old) => old.filter((summ) => summ._id !== id));
            return { previousFollowing };
        },
        onError: (_err, _player, context) => {
            queryClient.setQueryData(["me"], context.previousFollowing);
        }
    });
};