const PlayerChampions = () => {

  return ( 
    <div className= "best-champions">
      <p className="best-champions-header">Best champions</p>
      <div className="best-champions-wrap">
        <div>
          <img className="champion-icon" src="https://static.u.gg/assets/lol/riot_static/11.9.1/img/champion/Tryndamere.png" alt="" />
        </div>
        <div className="champion-name">PYKE</div>
        <div className="champion-winrate">80%</div>
        <div className="champion-kda">
          <div className="kda">1.2 KDA</div>
          <div className="statline">12 / 10 / 0</div>
        </div>
      </div>
    </div>
  );
}
 
export default PlayerChampions;