import { useEffect } from "react";
import { useParams } from "react-router"

const Players = () => {
    const { region, server, summonerName } = useParams();

    useEffect(() => {
        ;(async function getPlayer() {
            const data = await ( await fetch(`/search/${region}/${server}/${summonerName}`)).json();
            console.log(data);
        })();
        return;
    }, [server, summonerName]);

    return ( 
        <div>Yo</div>
     );
}
 
export default Players;