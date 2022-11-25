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
            map.set(data.data[name].key, {
                name: data.data[name].name,
                id: name,
                link: (version) => `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${name}.png`
            });
        }
        map.set("-1", {
            name: "NoBan",
            id: "No ban",
            link: () => "https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon29.png"
        });

        return map;
    };

    return useQuery(["champions"], fetchAllChampions, {
        enabled: !!version,
        staleTime: 3000000,
    });
};