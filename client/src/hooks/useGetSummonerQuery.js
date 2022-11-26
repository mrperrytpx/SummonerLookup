import { API_URL } from "consts/apiUrl";
import { useQuery } from "react-query";

const getSummoner = async (signal, server, summonerName) => {
    const response = await fetch(`${API_URL}/api/summoner/search_summoner/${server}/${summonerName.toLowerCase()}`, {
        signal
    });

    if (signal.aborted) return;
    if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

    const data = await response.json();
    return data;
};

export const useGetSummonerQuery = (server, summonerName) => {

    return useQuery(["summoner", server, summonerName.toLowerCase()],
        ({ signal }) => getSummoner(signal, server, summonerName),
        {
            retry: 1,
            enabled: !!server && !!summonerName,
        });
};