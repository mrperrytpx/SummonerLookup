import { forwardRef } from "react";
import { StyledSummonerInput } from "./SummonerInput.styled";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { InputField } from "../../atoms/InputField/InputField";

export const SummonerInput = forwardRef(({ setSummonerName, summonerName, server }, ref) => {

  return (
    <StyledSummonerInput>
      <InputField
        ref={ref}
        placeholder="Search a summoner..."
        setState={setSummonerName}
        state={summonerName}
        maxLength="16"
      />
      <IconButtonLink
        icon="search"
        summonerName={summonerName}
        server={server}
      />
    </StyledSummonerInput>
  );
});