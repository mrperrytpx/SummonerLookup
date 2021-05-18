import { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import PlayerRanked from "./PlayerRanked";
import PlayerUnranked from "./PlayerUnranked";

const PlayerStanding = () => {
  const { playerData: {ranked} } = useContext(PlayerContext);
  const [isRanked, setIsRanked] = useState(false);

  useEffect(() => {
    if (ranked.tier) {
      setIsRanked(true);
    }
  }, [ranked])
  
  return ( 
    <div className="rank">
      <p className="rank-header">RANK</p>
      {isRanked ? 
        <PlayerRanked ranked={ranked}/>
      : <PlayerUnranked />
    }
    </div>
  );
}
 
export default PlayerStanding;