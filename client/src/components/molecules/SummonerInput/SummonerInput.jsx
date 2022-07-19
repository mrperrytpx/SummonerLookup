import { StyledSummonerInput } from "./SummonerInput.styled";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { InputField } from "../../atoms/InputField/InputField";

export const SummonerInput = () => {
  return (
    <StyledSummonerInput>
      <InputField />
      <IconButtonLink icon="search" />
    </StyledSummonerInput>
  );
};
