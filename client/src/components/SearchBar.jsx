import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SearchBar = () => {
  const [server, setServer] = useState("eun1");
  const [summonerName, setSummonerName] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
  }

  const style = {
    backgroundColor: "white",
    fontSize: "3rem",
    borderRadius: "0 5px 5px 0",
    minWidth: "3rem"
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>

        <select 
          value={server}
          onChange={(e) => {
            setServer(e.target.value);
          }}
        >
          <option value="eun1">EUNE</option>
          <option value="euw1">EUW</option>
          <option value="na1">NA</option>
          <option value="kr">KR</option>
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

          <FaAngleDoubleRight style={style} />

      </form>
    </div>
    );
}
 
export default SearchBar;