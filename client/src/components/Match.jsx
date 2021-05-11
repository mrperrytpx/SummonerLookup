const Match = () => {
  return ( 
    <div className="match-wrap">
      <div className="idk">
        <div className="match-champion">
          <div className="champion-wrap">
            <div className="match-champion-level">16</div>
            <img className="match-champion-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/champion/Tryndamere.png" alt="" />
          </div>
          <div className="summs">
            <img className="match-champion-summoner1 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
            <img className="match-champion-summoner2 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
            <img className="match-champion-keystone small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
            <img className="match-champion-secondary small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
          </div>
        </div>
        <div className="match-champion-stats">
          <div className="match-champion-kda">13 / 5 / 18</div>
          <div className="match-champion-scores">155CS - 188VS</div>
        </div>
      </div>
      <div className="match-champion-build">
        <img className="match-item1 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
        <img className="match-item2 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
        <img className="match-item3 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
        <img className="match-item4 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
        <img className="match-item5 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
        <img className="match-item6 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
        <img className="match-item7 small-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png"/>
      </div>
    </div>
   );
}
 
export default Match;