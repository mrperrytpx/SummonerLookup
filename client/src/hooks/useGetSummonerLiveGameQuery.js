import { useQuery } from "react-query";

export const useGetSummonerLiveGameQuery = (server, summonerId) => {

    const getSummonerLiveGame = async ({ signal }) => {
        const response = await fetch(`${process.env.REACT_APP_NOT_SECRET_CODE}/api/summoner/live_game/${server}/${summonerId}`, {
            signal
        });

        if (signal.aborted) return;
        if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

        const data = await response.json();
        return data;
    };

    return useQuery(["live-game", server, summonerId], getSummonerLiveGame, {
        staleTime: 10000,
        retry: 1,
        enabled: !!server && !!summonerId,
    });
};