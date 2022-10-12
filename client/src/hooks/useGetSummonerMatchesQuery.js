import { useInfiniteQuery, useQuery } from "react-query";

export const useGetSummonerMatchesQuery = (server, puuid) => {

    const getSummonerMatches = async ({ signal }) => {
        const response = await fetch(`/api/summoner/matches/${server}/${puuid}`, {
            signal
        });

        if (signal.aborted) return;

        if (!response.ok) throw new Error("Something went wrong... try reloading the poge");

        const data = await response.json();
        console.log("SUMMONER MATCHES DATA:", data);
        return data;
    };

    return useQuery(["matches", server, puuid], getSummonerMatches, {
        enabled: !!server && !!puuid
    });

};

// export const useGetSummonerMatchesInfiniteQuery = (server, puuid) => {

//     const getSummonerMatches = async ({ signal }) => {
//         const response = await fetch(`/api/summoner/matches/${server}/${puuid}`, {
//             signal
//         });

//         if (signal.aborted) return;

//         if (!response.ok) throw new Error("Something went wrong... try reloading the poge");

//         const data = await response.json();
//         console.log("SUMMONER MATCHES DATA:", data);
//         return data;
//     };

//     return useInfiniteQuery(["matches", server, puuid], getSummonerMatches, {
//         enabled: !!server && !!puuid
//     });

// };
