import { useQuery } from "react-query";

export const useGetSummonerSingleMatchQuery = (id) => {
    const getMatch = async ({ signal }) => {
        const response = await fetch(`${process.env.REACT_APP_NOT_SECRET_CODE}/api/summoner/match_details/${id}`, {
            signal,
        });

        if (signal.aborted) return;
        if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

        const data = await response.json();

        return data;
    };

    return useQuery(["match", id], getMatch, {
        staleTime: 9999999,
        enabled: !!id,
    });
};
