import { useQuery } from "react-query";

const useGetLeagueVersion = () => {

    const fetchVersion = async ({ signal }) => {
        const response = await fetch("http://ddragon.leagueoflegends.com/api/versions.json", {
            signal
        });
        if (!response.ok) throw new Error("Problem fetching data");
        const data = await response.json();
        return data[0];
    };


    return useQuery(["version"], fetchVersion, { staleTime: 900000 });
};

export default useGetLeagueVersion;