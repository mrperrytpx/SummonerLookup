import { StyledRadioButton } from "./RadioButton.styled";

export const RadioButton = ({ onChange, checked, id, value }) => {
  return (
    <StyledRadioButton onChange={onChange} checked={checked} id={id} value={value} name="server" />
  );
};



