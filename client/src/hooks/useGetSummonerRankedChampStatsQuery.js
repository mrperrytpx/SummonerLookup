import { useQuery } from "react-query";

export const useGetSummonerRankedChampStatsQuery = (server, summonerName) => {
    const getChampRankedStats = async ({ signal }) => {

        const response = await fetch(`/api/summoner/champion_stats/${server}/${summonerName}`, {
            signal
        });

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Something went wrong... try reloading the poge");

        const data = await response.json();
        console.log("SUMMONER CHAMP RANKED DATA:", data);
        return data;
    };

    return useQuery(["champion-stats", server, summonerName], getChampRankedStats, {
        enabled: !!server && !!summonerName
    });

};