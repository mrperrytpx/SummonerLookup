const Summoner = ({ summoner }) => {
  return ( 
    <div>
      <p>{summoner.server}</p>
      <p>{summoner.summonerName}</p>
      <p>{summoner.summonerID}</p>
    </div>
  );
}

export default Summoner;