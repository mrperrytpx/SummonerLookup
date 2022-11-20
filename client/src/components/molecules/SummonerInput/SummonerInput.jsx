import { StyledSummonerInput } from "./SummonerInput.styled";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { InputField } from "../../atoms/InputField/InputField";

export const SummonerInput = ({ setSummonerName, summonerName, server }) => {

  return (
    <StyledSummonerInput>
      <InputField
        placeholder="Search a summoner..."
        setSummonerName={setSummonerName}
        summonerName={summonerName}
        maxLength="16"
      />
      <IconButtonLink
        icon="search"
        summonerName={summonerName}
        server={server}
      />
    </StyledSummonerInput>
  );
};