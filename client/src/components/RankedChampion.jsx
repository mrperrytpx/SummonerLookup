const RankedChampion = () => {
  return (  
    <div className="best-champions-wrapper">

      <div className="best-champion-look">
        <div className="best-champion-icon">
          <img 
            className="champion-icon" 
            src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/champion/Tryndamere.png" 
            alt="" 
          />
        </div>
        <p className="best-champion-name">PYKE</p>
      </div>

      <div className="best-champion-score">
        <p className="best-kda">3.06KDA</p>
        <p className="best-avg">11 / 6 / 8</p>
      </div>

      <div className="best-champion-games">
        <p className="winrate">50%</p>
        <p className="games">16 games</p>
      </div>
    
    </div>
  );
}
 
export default RankedChampion;