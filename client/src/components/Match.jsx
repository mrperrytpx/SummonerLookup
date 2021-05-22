import { useState } from "react";
import MatchDetails from "./MatchDetails";

const Match = ( { game } ) => {
  const [isClicked, setIsClicked] = useState(false);

  return ( 
    <div 
      onClick={() => setIsClicked(() => !isClicked)} 
      className={`games-wrapper ${game?.win ? "winner" : "loser"}` }>

      <div className="game-wrapper">

        <div className="game-champ-setup">
          <div className="game-champ-icon">
            <img 
              className="ch" 
              src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${game?.championName}.png`} 
              alt="Champion"
            />
          </div>
          <div className="game-champ-summs">
            <div className="summoner1">
              <img 
                className="small" 
                src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${game?.summoner1}.png`} 
                alt="s"
              />
            </div>
            <div className="summoner2">
              <img 
                className="small" 
                src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${game?.summoner2}.png`} 
                alt="s"
              />
            </div>
            <div className="keystone">
              <img 
                className="small" 
                src={`https://ddragon.leagueoflegends.com/cdn/img/${game?.keystone}`} 
                alt="s"
              />
            </div>
            <div className="secondary">
              <img 
                className="small" 
                src={`https://ddragon.leagueoflegends.com/cdn/img/${game?.secondary}`} 
                alt="s"
              />
            </div>
          </div>
        </div>

        <div className="game-build-wrapper">

          <div className="game-champ-score">
            <p className="score-header">Score:</p>
            <p className="calculated-kda">
              {game?.deaths === 0 ? game?.kills + game?.assists : +((game?.kills + game?.assists) / game?.deaths).toFixed(2)} KDA
            </p>
            <p className="game-score">{game?.kills} / {game?.deaths} / {game?.assists}</p>
          </div>

          <div className="game-champ-build">
            <div className="game-champ-build-wrapper">
              <div className="item1 item">
                {game?.item0 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item0}.png`} alt="Item slot 1"/> : <div></div> }            
              </div>
              <div className="item2 item">
                {game?.item1 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item1}.png`} alt="Item slot 2"/> : <div></div> }            
              </div>
              <div className="item3 item">
                {game?.item2 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item2}.png`} alt="Item slot 3"/> : <div></div> }            
              </div>
              <div className="item4 item">
                {game?.item3 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item3}.png`} alt="Item slot 4"/> : <div></div> }            
              </div>
              <div className="item5 item">
                {game?.item4 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item4}.png`} alt="Item slot 5"/> : <div></div> }            
              </div>
              <div className="item6 item">
                {game?.item5 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item5}.png`} alt="Item slot 6"/> : <div></div> }
              </div>
              <div className="item7 item">
                {game?.item6 ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${game?.item6}.png`} alt="Trinket slot"/> : <div></div> }            
              </div>
            </div>
            <div className="duration">
              <p>Duration:</p>
              <p>{Math.floor(game?.duration / 60000)}m {((game?.duration % 60000) / 1000).toFixed(0)}s</p>
            </div>
          </div>
          
        </div>

      </div>
      { isClicked && <MatchDetails id={game?.matchId} /> }
    </div>
   );
}
 
export default Match;