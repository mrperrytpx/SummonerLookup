import { useQuery } from "react-query";
import { API_URL } from "consts/apiUrl";

export const useGetSummonerSingleMatchQuery = (id) => {

    const getMatch = async ({ signal }) => {
        const response = await fetch(`${API_URL}/api/summoner/match_details/${id}`, {
            signal
        });

        if (signal.aborted) return;
        if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

        const data = await response.json();
        return data;
    };

    return useQuery(["match", id], getMatch, {
        staleTime: 9999999,
        enabled: !!id
    });
};