import { useQuery } from "react-query";
import { useGetLeagueVersion } from "./useGetLeagueVersion";

export const useGetLeagueChampions = () => {
    const { data: version } = useGetLeagueVersion();

    const fetchAllChampions = async ({ signal }) => {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`, {
            signal
        });
        if (!response.ok) throw new Error("Problem fetching data");
        const data = await response.json();

        let map = new Map();
        for (let name in data.data) {
            map.set(data.data[name].key, name);
        }

        return map;
    };

    return useQuery(["champions"], fetchAllChampions, {
        enabled: !!version,
        staleTime: 3000000,
    });
};