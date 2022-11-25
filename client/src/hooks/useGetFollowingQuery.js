import { useQuery } from "react-query";
import { useAuth } from "./useAuth";

const getFollowing = async (accessToken, signal) => {
    const response = await fetch("/api/user/me", {
        method: "GET",
        signal,
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`
        }
    });

    if (signal.aborted) return;

    if (!response.ok) {
        if (response.status === 403) {
            throw new Error("Forbidden");
        } else {
            throw new Error("Something went wrong. Try reloading the page");
        }
    }

    const data = await response.json();
    return data;
};

export const useGetFollowingQuery = () => {

    const { accessToken } = useAuth();
    return useQuery(["me"], ({ signal }) => getFollowing(accessToken, signal), {
        enabled: !!accessToken
    });
};