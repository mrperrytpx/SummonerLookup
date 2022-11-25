import { StyledInputField } from "./InputField.styled";
import { forwardRef } from "react";

export const InputField = forwardRef(({ summonerName, setSummonerName, placeholder, type, maxLength }, ref) => {
  return (
    <StyledInputField
      placeholder={placeholder ? placeholder : ""}
      value={summonerName}
      onChange={(e) => setSummonerName(e.target.value)}
      type={type ? type : "text"}
      required
      maxLength={maxLength}
      ref={ref}
    />
  );
});
