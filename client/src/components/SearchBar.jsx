import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SearchBar = () => {
  const [server, setServer] = useState("eun1");
  const [summonerName, setSummonerName] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const summonerData = await fetch(`/search/${summonerName}/${server}`)
      const responseData = await summonerData.json();
      } catch(err) {
        console.log(err);
      }
    }

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>

        <select 
          value={server}
          onChange={(e) => {
            console.log(e.target.value);
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
            console.log(e.target.value);
            setSummonerName(e.target.value);
          }}
          />

          <button><FaArrowRight /></button>

      </form>
    </div>
    );
}
 
export default SearchBar;