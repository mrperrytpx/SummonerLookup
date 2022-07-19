import { StyledSearchSummoner } from "./SearchSummoner.styled";
import { SummonerInput } from "../../molecules/SummonerInput/SummonerInput";
import { ServerPicker } from "../../molecules/ServerPicker/ServerPicker";


export const SearchSummoner = ({ handleLabelClick, handleRadioClick, checkedRadioButton }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const myRadioInput = checkedRadioButton;
    if (!myRadioInput) {
      alert("no");
      return;
    }
    console.log(myRadioInput);
  };

  return (
    <StyledSearchSummoner
      as="form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <SummonerInput />
      <ServerPicker
        handleLabelClick={handleLabelClick}
        handleRadioClick={handleRadioClick}
        checkedRadioButton={checkedRadioButton}
      />
    </StyledSearchSummoner>
  );
};
