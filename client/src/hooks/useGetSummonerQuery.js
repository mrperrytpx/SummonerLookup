import { useQuery, useQueryClient } from "react-query";

export const useGetSummonerQuery = (server, summonerName) => {

    const queryClient = useQueryClient();

    const getSummoner = async ({ signal }) => {

        const response = await fetch(`/api/summoner/search_summoner/${server}/${summonerName.toLowerCase()}`, {
            signal
        });

        if (signal.aborted) return;
        if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

        const data = await response.json();
        return data;
    };

    return useQuery(["summoner", server, summonerName.toLowerCase()], getSummoner, {
        staleTime: 300000,
        retry: 1,
        enabled: !!server && !!summonerName,
        onError: () => queryClient.cancelQueries("summoner"),
        onSuccess: (data) => console.log("Summoner data:", data)
    });
};