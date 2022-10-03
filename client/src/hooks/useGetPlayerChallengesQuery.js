import { useQuery } from "react-query";

export const useGetPlayerChallengesQuery = (server, summonerName, puuid) => {

    const getPlayerChallenges = async ({ signal }) => {
        const response = await fetch(`/api/summoner/challenges/${server}/${puuid}`, {
            signal
        });

        if (response.status >= 500) throw new Error("Something went wrong...");

        if (signal.aborted) return;

        const data = await response.json();
        console.log("Player challenges data:", data);
        return data;
    };

    return useQuery(["challenges", server, summonerName, puuid], getPlayerChallenges, {
        enabled: !!puuid,
        staleTime: 300000
    });
};