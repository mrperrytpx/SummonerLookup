import { API_URL } from "consts/apiUrl";
import { useQuery } from "react-query";

export const useGetSummonerRankedChampStatsQuery = (server, summonerName) => {

    const getChampRankedStats = async ({ signal }) => {
        const response = await fetch(`${API_URL}/api/summoner/champion_stats/${server}/${summonerName}`, {
            signal
        });

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Something went wrong... try reloading the poge");

        const data = await response.json();
        return data;
    };

    return useQuery(["champion-stats", server, summonerName.toLowerCase()], getChampRankedStats, {
        enabled: !!server && !!summonerName,
        staleTime: 300000
    });

};