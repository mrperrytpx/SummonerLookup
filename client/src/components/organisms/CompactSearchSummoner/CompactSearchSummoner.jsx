import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServerDropdown } from "../../atoms/ServerDropdown/ServerDropdown";
import { SummonerInput } from "../../molecules/SummonerInput/SummonerInput";
import { StyledCompactSearchSummoner } from "./CompactSearchSummoner.styled";

export const CompactSearchSummoner = () => {

  const [summonerName, setSummonerName] = useState("");
  const [dropdownValue, setDropdownValue] = useState("eun1");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dropdownValue || !summonerName) {
      alert("no");
      return;
    }
    setSummonerName(() => "");
    navigate(`/${dropdownValue}/${summonerName}`);
  };

  const handleOptionClick = (e) => {
    setDropdownValue(e.target.value);
  };

  return (
    <StyledCompactSearchSummoner as="form" onSubmit={(e) => handleSubmit(e)}>
      <ServerDropdown handleOptionClick={handleOptionClick} />
      <SummonerInput
        setSummonerName={setSummonerName}
        summonerName={summonerName}
        server={dropdownValue}
      />
    </StyledCompactSearchSummoner>
  );
};
