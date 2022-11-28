import { API_URL } from "consts/apiUrl";
import { useQuery } from "react-query";

const getSummoner = async (server, summonerName) => {
    const response = await fetch(`${API_URL}/api/summoner/search_summoner/${server}/${summonerName.toLowerCase()}`);

    if (!response.ok) throw new Error("Something went wrogn... Try reloading the page");

    const data = await response.json();
    return data;
};

export const useGetSummonerQuery = (server, summonerName) => {

    return useQuery(["summoner", server, summonerName.toLowerCase()],
        () => getSummoner(server, summonerName),
        {
            staleTime: 300000,
            retry: 1,
            enabled: !!server && !!summonerName,
        });
};