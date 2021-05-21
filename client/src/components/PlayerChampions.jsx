import RankedChampion from "./RankedChampion";

const PlayerChampions = () => {

  return ( 
    <div className= "best-champions">
      <p className="best-champions-header">TOP 3 CHAMPIONS</p>
      <div className="best-champions-box">
        <RankedChampion />
        <RankedChampion />
        <RankedChampion />
      </div>

      <div className="goto-stats">
        <a href="/stats">
          <p>SEE ALL CHAMPIONS</p>
        </a>
      </div>
    </div>
  );
}
 
export default PlayerChampions;