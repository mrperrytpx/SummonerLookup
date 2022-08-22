import { StyledInputField } from "./InputField.styled";

export const InputField = ({ summonerName, setSummonerName, placeholder, type }) => {
  return (
    <StyledInputField
      placeholder={placeholder ? placeholder : ""}
      value={summonerName}
      onChange={(e) => setSummonerName(e.target.value)}
      type={type ? type : "text"}
      required
    />
  );
};
