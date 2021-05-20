import { useEffect, useState } from "react";

const PlayerRanked = ({ ranked }) => {
    const [rankImage, setRankImage] = useState("");
    const [rankTier, setRankTier] = useState("");
    const [rankDivision, setRankDivision] = useState("");
    const [rankPoints, setRankPoints] = useState("");
    const [rankWinrate, setRankWinrate] = useState("");
    const [rankWins, setRankWins] = useState("");
    const [rankLosses, setRankLosses] = useState("");

    useEffect(() => {
      setRankImage(`https://static.u.gg/assets/lol/ranks/2d/${ranked?.tier?.toLowerCase()}.svg`);
      setRankTier(ranked?.tier);
      setRankDivision(ranked?.division);
      setRankPoints(ranked?.LP);
      setRankWinrate(+(ranked?.wins / (ranked?.wins + ranked?.losses) * 100).toFixed(2));
      setRankWins(ranked?.wins);
      setRankLosses(ranked?.losses);
    }, [ranked]);

    return ( 
        <div className="rank-stats-wrap">

        <div className="rank-image">
          <img className="rank-icon"src={rankImage} alt="" />
        </div>

        <div className="rank-points">
          <div className="rank-elo">{rankTier} {rankDivision} : {rankPoints}LP</div>
          <div className="rank-winrate"> {rankWinrate}% ({rankWins}W - {rankLosses}L)</div>
        </div>
        
      </div>
     );
}
 
export default PlayerRanked;