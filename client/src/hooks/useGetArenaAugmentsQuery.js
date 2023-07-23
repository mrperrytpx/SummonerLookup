import { useQuery } from "react-query";

export const useGetArenaAugmentsQuery = () => {
    const getArena = async ({ signal }) => {
        const response = await fetch(
            `${process.env.REACT_APP_NOT_SECRET_CODE}/static/arena.json`,
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
