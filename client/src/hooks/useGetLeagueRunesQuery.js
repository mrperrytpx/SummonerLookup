import { useQuery } from "react-query";
import { useGetLeagueVersion } from "./useGetLeagueVersion";

export const useGetLeagueRunesQuery = () => {
    const { data: version } = useGetLeagueVersion();

    const fetchLeagueRunes = async ({ signal }) => {
        const response = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`,
            {
                signal,
            }
        );

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Problem fetching data");
        const data = await response.json();

        return data;
    };

    return useQuery(["runes"], fetchLeagueRunes, {
        enabled: !!version,
        staleTime: 3000000,
    });
};
