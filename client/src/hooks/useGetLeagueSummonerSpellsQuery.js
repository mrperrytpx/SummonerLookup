import { useQuery } from "react-query";

export const useGetLeagueSummonerSpellsQuery = () => {
    const fetchLeagueSummonerSpells = async ({ signal }) => {
        const response = await fetch(
            "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/en_gb/v1/summoner-spells.json",
            {
                signal,
            }
        );

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Problem fetching data");
        const data = await response.json();
        return data;
    };

    return useQuery(["summoner-spells"], fetchLeagueSummonerSpells, {
        staleTime: 3000000,
    });
};
