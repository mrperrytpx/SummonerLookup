import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
// Components
import MatchDetails from "./MatchDetails";
import Item from "./Item";

const Match = ({ game }) => {
  const queryClient = useQueryClient();
  const [isClicked, setIsClicked] = useState(false);

  const version = queryClient.getQueryData(["version"]);

  useEffect(() => console.log(game), [game])

  return (
    <div
      onClick={() => setIsClicked(() => !isClicked)}
      className={`games-wrapper ${game?.win ? "winner" : "loser"}`}>

      <div className="game-wrapper">

        <div className="game-champ-setup">
          <div className="game-champ-icon">
            <img
              className="ch"
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${game?.championName}.png`}
              alt="Champion"
            />
          </div>
          <div className="game-champ-summs">
            <div className="summoner1">
              <img
                className="small"
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${game?.summoner1}.png`}
                alt="s"
              />
            </div>
            <div className="summoner2">
              <img
                className="small"
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${game?.summoner2}.png`}
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
              {game?.items.map(item => (
                <Item key={item} item={item} version={version} />
              ))}
            </div>
            <div className="duration">
              <p>Duration:</p>
              <p>{Math.floor(game?.duration / 60000)}m {((game?.duration % 60000) / 1000).toFixed(0)}s</p>
            </div>
          </div>

        </div>

      </div>
      {isClicked && <MatchDetails id={game?.matchId} />}
    </div>
  );
}

export default Match;