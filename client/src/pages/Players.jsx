import { useEffect } from "react";
import { useParams } from "react-router"

const Players = () => {
  const { region, server, summonerName } = useParams();

  // Fetch the search players data on page load
  useEffect(() => {
    ;(async function getPlayer() {
      const data = await (await fetch(`/search/${region}/${server}/${summonerName}`)).json();
      console.log(data);
    })();
    return;
  }, [region, server, summonerName]);

  return ( 
    <div className="container">
      <div className="player-stats">
        <div className="player-card">
          <div className="player-icon"></div>
          <div className="player-name">SUMMONER NAME</div> 
          <button className="follow">FOLLOW</button>    
        </div>
        <div className="rank">
          <p className="rank-header">Current standing:</p>
          <div className="rank-image"></div>
          <div className="rank-elo">Silver IV : 50LP</div>
          <div className="rank-winrate"> 69% (40W - 20L)</div>
        </div>
        <div className= "best-champions">
          <p className="best-champions-header">Best champions</p>
          <div className="best-champions-wrap">
            <div className="champion-icon"></div>
            <div className="champion-name">PYKE</div>
            <div className="champion-winrate">80%</div>
            <div className="champion-kda">1.2(
              <span className="k">12 </span>
              <span className="d">10 </span>
              <span className="a">0 </span>
            )</div>
          </div>
        </div>
      </div>
      <div className="matches">
      <div className="match-wrap">
          <div className="match-champion-level">16</div>
          <div className="match-champion">
            <div className="match-champion-icon"></div>
            <div className="match-champion-summoner1"></div>
            <div className="match-champion-summoner2"></div>
            <div className="match-champion-keystone"></div>
            <div className="match-champion-secondary"></div>
          </div>
          <div className="match-champion-score">
            <div className="match-champion-kda">13 / 5 / 18</div>
            <div className="match-champion-scores">155CS - 188VS</div>
          </div>
          <div className="match-champion-build">
            <div className="match-item1"></div>
            <div className="match-item2"></div>
            <div className="match-item3"></div>
            <div className="match-item4"></div>
            <div className="match-item5"></div>
            <div className="match-item6"></div>
            <div className="match-item7"></div>
          </div>
        </div>
        
    </div>
  </div>
  );
}
 
export default Players;