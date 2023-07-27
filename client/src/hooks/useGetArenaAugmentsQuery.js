import { useQuery } from "react-query";

export const useGetArenaAugmentsQuery = () => {
    const getArena = async ({ signal }) => {
        const response = await fetch(
            `https://raw.communitydragon.org/latest/cdragon/arena/en_us.json`,
            {
                signal,
            }
        );

        if (!response.ok)
            throw new Error("Something went wrong. Try reloading the page");

        const data = await response.json();
        return data;
    };

    return useQuery(["arena"], getArena, {
        staleTime: 3000000,
    });
};
