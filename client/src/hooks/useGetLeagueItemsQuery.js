import { useQuery } from "react-query";
import { useGetLeagueVersion } from "./useGetLeagueVersion";

export const useGetLeagueItemsQuery = () => {
    const { data: version } = useGetLeagueVersion();

    const fetchLeagueItems = async ({ signal }) => {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`, {
            signal,
        });

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Problem fetching data");
        const data = await response.json();

        return data.data;
    };

    return useQuery(["items"], fetchLeagueItems, {
        enabled: !!version,
        staleTime: 3000000,
    });
};
