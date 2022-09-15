import { useQuery } from "react-query";
import { useAuth } from "./useAuth";
import { queryClient } from "../contexts/AppProviders";

const getFollowing = async (accessToken) => {
    const controller = new AbortController();
    const response = await fetch("/api/user/me", {
        method: "GET",
        signal: controller.signal,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`
        }
    });

    if (controller.signal.aborted) return;

    if (!response.ok) {
        if (response.status === 403) {
            throw new Error("Forbidden");
        } else {
            throw new Error("Something went wrong. Try reloading the page");
        }
    }

    const data = await response.json();
    console.log("Data: ", data);
    return data;
};

export const useGetFollowingQuery = () => {

    const { accessToken } = useAuth();
    return useQuery(["me"], () => getFollowing(accessToken), {
        enabled: !!accessToken
    });
};


export const prefetchFollowingQuery = async () => {
    await queryClient.prefetchQuery(["me"], getFollowing);
};