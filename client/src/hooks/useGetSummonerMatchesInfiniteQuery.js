import { useInfiniteQuery } from "react-query";

export const useGetSummonerMatchesInfiniteQuery = (server, puuid) => {

    const getSummonerMatches = async ({ signal, pageParam = 1 }) => {
        const response = await fetch(`/api/summoner/matches/${server}/${puuid}/${pageParam}`, {
            signal
        });

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Something went wrong... try reloading the poge");

        const data = await response.json();
        return data;
    };

    return useInfiniteQuery(["matches", server, puuid], getSummonerMatches, {
        staleTime: 300000,
        enabled: !!server && !!puuid,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage?.hasNextPage) {
                return pages.length + 1;
            } else {
                return undefined;
            }
        },
        onSuccess: (data) => console.log("Matches data: ", data),
        retry: 1
    });

};
