import { StyledInputField } from "./InputField.styled";

export const InputField = ({ summonerName, setSummonerName, placeholder }) => {
  return (
    <StyledInputField
      placeholder={placeholder ? placeholder : ""}
      value={summonerName}
      onChange={(e) => setSummonerName(e.target.value)}
      type="text"
      required
    />
  );
};
