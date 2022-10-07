import { useQuery } from "react-query";

export const useGetSummonerChallengesQuery = (server, summonerName, puuid) => {

    const getSummonerChallenges = async ({ signal }) => {
        const response = await fetch(`/api/summoner/challenges/${server}/${puuid}`, {
            signal
        });

        if (response.status >= 500) throw new Error("Something went wrong...");

        if (signal.aborted) return;

        const data = await response.json();
        console.log("Summoner challenges data:", data);
        return data;
    };

    return useQuery(["challenges", server, summonerName.toLowerCase(), puuid], getSummonerChallenges, {
        enabled: !!puuid,
        staleTime: 180000
    });
};