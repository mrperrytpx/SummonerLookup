import { StyledSummonerInput } from "./SummonerInput.styled";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { InputField } from "../../atoms/InputField/InputField";

export const SummonerInput = () => {
  return (
    <StyledSummonerInput>
      <InputField />
      <IconButton />
    </StyledSummonerInput>
  );
};
