import { Dropdown } from "components/atoms/Dropdown/Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SummonerInput } from "../../molecules/SummonerInput/SummonerInput";
import { StyledCompactSearchSummoner } from "./CompactSearchSummoner.styled";
import { SERVER_VALUES } from "consts/serverValues";

export const CompactSearchSummoner = () => {

  const [summonerName, setSummonerName] = useState("");
  const [dropdownValue, setDropdownValue] = useState(localStorage.getItem("server") || "eun1");
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

  const handleClick = (value) => {
    localStorage.setItem("server", value);
    setDropdownValue(value);
  };

  const options = Object.keys(SERVER_VALUES).map(server => {
    return {
      stateValue: `${server}`,
      text: SERVER_VALUES[server]
    };
  });

  return (
    <StyledCompactSearchSummoner as="form" onSubmit={(e) => handleSubmit(e)}>
      <Dropdown
        values={SERVER_VALUES}
        from="left"
        options={options}
        state={dropdownValue}
        setState={setDropdownValue}
        handleClick={handleClick}
      />
      <SummonerInput
        setSummonerName={setSummonerName}
        summonerName={summonerName}
        server={dropdownValue}
      />
    </StyledCompactSearchSummoner>
  );
};
