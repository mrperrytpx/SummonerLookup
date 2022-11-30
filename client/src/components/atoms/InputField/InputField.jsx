import { StyledInputField } from "./InputField.styled";
import { forwardRef } from "react";

export const InputField = forwardRef(({ state, setState, placeholder, type, maxLength, ...rest }, ref) => {
  return (
    <StyledInputField
      placeholder={placeholder ? placeholder : ""}
      value={state}
      onChange={(e) => setState(e.target.value)}
      type={type ? type : "text"}
      required
      maxLength={maxLength}
      ref={ref}
      {...rest}
    />
  );
});
