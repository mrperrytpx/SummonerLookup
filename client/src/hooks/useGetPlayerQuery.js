import { useQuery, useQueryClient } from "react-query";

export const useGetPlayerQuery = (server, summonerName) => {

    const queryClient = useQueryClient();

    const getPlayer = async ({ signal }) => {

        const response = await fetch(`/api/summoner/search_summoner/${server}/${summonerName.toLowerCase()}`, {
            method: "GET",
            signal
        });

        if (signal.aborted) return;
        if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

        const data = await response.json();
        return data;
    };

    return useQuery(["player", server, summonerName.toLowerCase()], getPlayer, {
        staleTime: 30000,
        retry: 1,
        enabled: !!server && !!summonerName,
        onError: () => queryClient.cancelQueries("player"),
        onSuccess: (data) => console.log("Player data:", data)
    });
};