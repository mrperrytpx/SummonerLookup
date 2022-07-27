import { StyledSearchSummoner } from "./SearchSummoner.styled";
import { SummonerInput } from "../../molecules/SummonerInput/SummonerInput";
import { ServerPicker } from "../../molecules/ServerPicker/ServerPicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchSummoner = () => {

  const [summonerName, setSummonerName] = useState("");
  const [checkedRadioButton, setCheckedRadioButton] = useState("eun1");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkedRadioButton || !summonerName) {
      alert("no");
      return;
    }
    navigate(`/${checkedRadioButton}/${summonerName}`);
  };

  const handleLabelClick = (e) => {
    setCheckedRadioButton(e.target.htmlFor);
  };

  const handleRadioClick = (e) => {
    setCheckedRadioButton(e.target.value);
  };

  return (
    <StyledSearchSummoner as="form" onSubmit={(e) => handleSubmit(e)}>
      <SummonerInput
        setSummonerName={setSummonerName}
        summonerName={summonerName}
        server={checkedRadioButton}
      />
      <ServerPicker
        handleLabelClick={handleLabelClick}
        handleRadioClick={handleRadioClick}
        checkedRadioButton={checkedRadioButton}
      />
    </StyledSearchSummoner>
  );
};
