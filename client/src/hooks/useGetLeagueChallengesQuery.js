import { useQuery } from "react-query";
import { useGetLeagueVersion } from "./useGetLeagueVersion";

export const useGetLeagueChallengesQuery = () => {

    const { data: version } = useGetLeagueVersion();

    const getChallenges = async ({ signal }) => {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/challenges.json`, {
            signal
        });

        if (!response.ok) throw new Error("Something went wrong. Try reloading the page");

        const data = await response.json();
        return data;
    };

    return useQuery(["challenges"], getChallenges, {
        staleTime: 3000000,
        enabled: !!version
    });
};