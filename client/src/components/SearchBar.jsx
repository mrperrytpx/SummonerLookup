import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const SearchBar = () => {
  const [server, setServer] = useState("eun1");
  const [summonerName, setSummonerName] = useState("");
  const [region, setRegion] = useState("europe");

  const style = {
    backgroundColor: "white",
    fontSize: "3rem",
    borderRadius: "0 5px 5px 0",
    minWidth: "3rem"
  };

  return (
    <div className="search-bar">
      <form>
        <select
          value={server}
          onChange={(e) => {
            setRegion(e.target.selectedOptions[0].dataset.region);
            setServer(e.target.value);
          }}
        >
          <option data-region="europe" value="eun1">EUNE</option>
          <option data-region="europe" value="euw1">EUW</option>
          <option data-region="europe" value="tr1">TR</option>
          <option data-region="europe" value="ru">RU</option>
          <option data-region="americas" value="na1">NA</option>
          <option data-region="americas" value="oc1">OCE</option>
          <option data-region="americas" value="la1">LAN</option>
          <option data-region="americas" value="la2">LAS</option>
          <option data-region="americas" value="br1">BR</option>
          <option data-region="asia" value="kr">KR</option>
          <option data-region="asia" value="jp1">JP</option>
        </select>

        <input
          type="text"
          required
          placeholder="Enter a summoner name..."
          value={summonerName}
          onChange={(e) => {
            setSummonerName(e.target.value);
          }}
        />

        <Link to={`/${region}/${server}/${summonerName}`}><FaAngleDoubleRight style={style} /></Link>
      </form>
    </div>
  );
}

export default SearchBar;