import { useInfiniteQuery } from "react-query";

export const useGetSummonerMatchesInfiniteQuery = (server, puuid) => {
    const getSummonerMatches = async ({ pageParam = 1 }) => {
        const response = await fetch(
            `${process.env.REACT_APP_NOT_SECRET_CODE}/api/summoner/matches/${server}/${puuid}/${pageParam}`
        );

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
        retry: 1,
    });
};
