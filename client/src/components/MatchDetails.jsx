import { useEffect, useContext, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const MatchDetials = ({ id }) => {
  const {playerData: {accountData: {region}}} = useContext(PlayerContext);
  const [matchData, setMatchData] = useState("");

  useEffect(() => {
    ;(async function matchDetails() {
      // if (matchData) return;
      try {
        const matchResponse = await fetch(`/match/${region}/${id}`);
        if (!matchResponse.ok) throw new Error("Couldn't fetch that match");

        const matchDetails = await matchResponse.json();
        if (!matchDetails) throw new Error("Invalid Match");

        console.log(matchDetails);
        setMatchData(matchDetails);
    } catch (err) {
        console.log(err);
      }
    })();
  }, [id, win, region]);

  return ( 
    <div className="match-details">
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
    </div>
  );
}
 
export default MatchDetials;