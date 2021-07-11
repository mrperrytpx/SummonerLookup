import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const fetchLiveGame = async (server, summonerName) => {
    const controller = new AbortController();
    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`/api/live/${server}/${summonerName}`, {
                method: "GET",
                signal: controller.signal
            });
            if (!response.ok) reject(new Error("Player isn't currently in a game"));
            const data = await response.json();
            resolve(data);
        } catch (error) {
            if (error?.name === "AbortError") reject(new Error("Request aborted"));
        }
    });
    promise.cancel = () => controller.abort();
    return promise;
}


const PlayerLive = () => {
    const { server, summonerName } = useParams();

    const { data, error, isError, isLoading } = useQuery(
        ["live-game", server, summonerName],
        () => fetchLiveGame(server, summonerName),
        {
            onSuccess: (data) => console.log(data)
        });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>There was an error: {error.message}</div>
    }

    return (
        <div>
            <p>{JSON.stringify(data, null, 2)}</p>
        </div>
    );
}

export default PlayerLive;