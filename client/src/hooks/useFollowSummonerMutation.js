import { API_URL } from "consts/apiUrl";
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from "./useAuth";

export const useFollowSummonerMutation = () => {

    const { accessToken } = useAuth();
    const queryClient = useQueryClient();

    const followSummoner = async ({ payload }) => {
        const response = await fetch(`${API_URL}/api/summoner/follow_summoner`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Something went wrong. Try again!");
        return response;
    };

    return useMutation(followSummoner, {
        onMutate: async ({ payload }) => {
            await queryClient.cancelQueries(["me"]);
            const previousFollowing = queryClient.getQueryData(["me"]);
            queryClient.setQueryData(
                ["me"],
                (old) => [...old, payload]);
            return { previousFollowing };
        },
        onError: (_err, _player, context) => {
            queryClient.setQueryData(["me"], context.previousFollowing);
        }
    });
};