const Match = () => {
  return ( 
    <div className="games-wrapper">
      <div className="game-wrapper">

        <div className="game-champ-setup">
          <div className="game-champ-icon">
            <img className="ch" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
          </div>
          <div className="game-champ-summs">
            <div className="summoner1">
              <img className="small" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="summoner2">
              <img className="small" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="keystone">
              <img className="small" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="secondary">
              <img className="small" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
          </div>
        </div>

        <div className="game-build-wrapper">

          <div className="game-champ-score">
            <p className="score-header">Score:</p>
            <p className="calculated-kda">3.06KDA</p>
            <p className="game-score">11 / 5 / 2</p>
          </div>

          <div className="game-champ-build">
            <div className="item1 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="item2 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="item3 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="item4 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="item5 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="item6 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
            <div className="item7 item">
              <img className="item-image" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/spell/SummonerFlash.png" alt="s"/>
            </div>
          </div>
          
        </div>

      </div>
    </div>
   );
}
 
export default Match;