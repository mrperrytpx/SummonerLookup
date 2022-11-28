import { useQuery } from "react-query";

export const useGetSummonerRankedStatsQuery = (server, summonerId) => {

    const getRankedStats = async ({ signal }) => {
        const response = await fetch(`${process.env.REACT_APP_NOT_SECRET_CODE}/api/summoner/ranked_stats/${server}/${summonerId}`, {
            signal
        });

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Something went wrong... try reloading the poge");

        const data = await response.json();
        return data;
    };

    return useQuery(["ranked-stats", server, summonerId], getRankedStats, {
        enabled: !!server && !!summonerId,
        staleTime: 300000
    });
};