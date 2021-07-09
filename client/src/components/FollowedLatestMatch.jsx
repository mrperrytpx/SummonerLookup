import { useQueryClient } from "react-query";

const FollowedLatestMatch = ({ game }) => {
  const queryClient = useQueryClient();
  const { version } = queryClient.getQueryData("version")

  return (
    <div className="latest-game-wrapper">

      <div className="latest-champ-setup">
        <div className="latest-champ-icon">
          <img
            className="latest-champ"
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/Jhin.png`}
            alt="Champion"
          />
        </div>
        <div className="latest-champ-summs">
          <div className="latest-summoner1">
            <img
              className="latest-small"
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerHeal.png`}
              alt="s"
            />
          </div>
          <div className="latest-summoner2">
            <img
              className="latest-small"
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerHeal.png`}
              alt="s"
            />
          </div>
          <div className="latest-keystone">
            <img
              className="latest-small"
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerHeal.png`}
              alt="s"
            />
          </div>
          <div className="latest-secondary">
            <img
              className="latest-small"
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/SummonerHeal.png`}
              alt="s"
            />
          </div>
        </div>
      </div>

      <div className="latest-build-wrapper">

        <div className="latest-score">
          <p className="calculated-kda">
            1.7 KDA
          </p>
          <p className="game-score">17 / 10 / 1</p>
        </div>

        <div className="latest-build">
          <div className="latest-item">
            {game?.item0 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item0}.png`} alt="Item slot 1" /> : <div></div>}
          </div>
          <div className="latest-item">
            {game?.item1 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item1}.png`} alt="Item slot 2" /> : <div></div>}
          </div>
          <div className="latest-item">
            {game?.item2 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item2}.png`} alt="Item slot 3" /> : <div></div>}
          </div>
          <div className="latest-item">
            {game?.item3 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item3}.png`} alt="Item slot 4" /> : <div></div>}
          </div>
          <div className="latest-item">
            {game?.item4 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item4}.png`} alt="Item slot 5" /> : <div></div>}
          </div>
          <div className="latest-item">
            {game?.item5 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item5}.png`} alt="Item slot 6" /> : <div></div>}
          </div>
          <div className="latest-item">
            {game?.item6 ? <img className="latest-item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${game?.item6}.png`} alt="Trinket slot" /> : <div></div>}
          </div>
        </div>

      </div>

    </div>
  );
}

export default FollowedLatestMatch;