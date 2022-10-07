import { useMutation } from "react-query";
import { useAuth } from "./useAuth";

export const useFollowSummonerMutation = () => {

    const { accessToken } = useAuth();

    const followSummoner = async ({ payload }) => {
        console.log("FOLLOWING SUMMONER WITH:", payload);
        const response = await fetch("/api/summoner/follow_summoner", {
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

    return useMutation(followSummoner);
};