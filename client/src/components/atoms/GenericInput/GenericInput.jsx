import { StyledGenericInput } from "./GenericInput.styled";

export const GenericInput = ({ placeholder = "", input = "", setInput }) => {

  return (
    <StyledGenericInput
      placeholder={placeholder}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
