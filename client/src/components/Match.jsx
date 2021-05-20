import { useEffect, useState } from "react";
import MatchDetails from "./MatchDetails";

const Match = ( {game, id} ) => {

  const [isClicked, setIsClicked] = useState(false);
  const [assists, setAssists] = useState("");
  const [deaths, setDeaths] = useState("");
  const [kills, setKills] = useState("");
  const [win, setWin] = useState();
  const [kda, setKda] = useState(0);
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");
  const [item3, setItem3] = useState("");
  const [item4, setItem4] = useState("");
  const [item5, setItem5] = useState("");
  const [item6, setItem6] = useState("");
  const [item7, setItem7] = useState("");
  const [championIcon, setChampionicon] = useState("");
  const [spell1, setSpell1] = useState("");
  const [spell2, setSpell2] = useState("");
  const [keystone, setKeystone] = useState("");
  const [secondary, setSecondary] = useState("");

  useEffect(() => {
    setChampionicon(`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${game?.championName}.png`)
    setAssists(game?.assists);
    setDeaths(game?.deaths);
    setKills(game?.kills);
    setWin(game?.win);
    setKda(() => {
      if (game?.deaths === 0) {
        return game?.kills + game?.assists
      } else {
        return +((game?.kills + game?.assists) / game?.deaths).toFixed(2);
      }  
    });
    setItem1(game?.item0 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item0}.png` : "");
    setItem2(game?.item1 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item1}.png` : "");
    setItem3(game?.item2 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item2}.png` : "");
    setItem4(game?.item3 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item3}.png` : "");
    setItem5(game?.item4 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item4}.png` : "");
    setItem6(game?.item5 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item5}.png` : "");
    setItem7(game?.item6 ? `http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item6}.png` : "");
    setSpell1(`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${game?.summoner1}.png`);
    setSpell2(`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${game?.summoner2}.png`);
    setKeystone(`https://ddragon.leagueoflegends.com/cdn/img/${game?.keystone}`);
    setSecondary(`https://ddragon.leagueoflegends.com/cdn/img/${game?.secondary}`);
  }, [game, id]);


  return ( 
    <div 
      onClick={() => setIsClicked(() => !isClicked)} 
      className="games-wrapper">

      <div className={`game-wrapper ${win ? "winner" : "loser"}`}>

        <div className="game-champ-setup">
          <div className="game-champ-icon">
            <img className="ch" src={championIcon} alt="Champion"/>
          </div>
          <div className="game-champ-summs">
            <div className="summoner1">
              <img className="small" src={spell1} alt="s"/>
            </div>
            <div className="summoner2">
              <img className="small" src={spell2} alt="s"/>
            </div>
            <div className="keystone">
              <img className="small" src={keystone} alt="s"/>
            </div>
            <div className="secondary">
              <img className="small" src={secondary} alt="s"/>
            </div>
          </div>
        </div>

        <div className="game-build-wrapper">

          <div className="game-champ-score">
            <p className="score-header">Score:</p>
            <p className="calculated-kda">{kda} KDA</p>
            <p className="game-score">{kills} / {deaths} / {assists}</p>
          </div>

          <div className="game-champ-build">
            <div className="item1 item">
              {game?.item0 ? <img className="item-image" src={item1} alt="Item slot 5"/> : <div></div> }            
            </div>
            <div className="item2 item">
              {game?.item1 ? <img className="item-image" src={item2} alt="Item slot 5"/> : <div></div> }            
            </div>
            <div className="item3 item">
              {game?.item2 ? <img className="item-image" src={item3} alt="Item slot 5"/> : <div></div> }            
            </div>
            <div className="item4 item">
              {game?.item3 ? <img className="item-image" src={item4} alt="Item slot 5"/> : <div></div> }            
            </div>
            <div className="item5 item">
              {game?.item4 ? <img className="item-image" src={item5} alt="Item slot 5"/> : <div></div> }            
            </div>
            <div className="item6 item">
              {game?.item5 ? <img className="item-image" src={item6} alt="Item slot 5"/> : <div></div> }
            </div>
            <div className="item7 item">
              {game?.item6 ? <img className="item-image" src={item7} alt="Trinket slot"/> : <div></div> }            
            </div>
          </div>
          
        </div>

      </div>
      { isClicked && <MatchDetails win={win} id={game?.matchId} /> }
    </div>
   );
}
 
export default Match;