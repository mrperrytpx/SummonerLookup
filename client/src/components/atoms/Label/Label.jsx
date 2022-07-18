import { StyledLabel } from "./Label.styled";

export const Label = ({ onClick, htmlFor, children, checkedRadioButton }) => {
  return (
    <StyledLabel checkedRadioButton={checkedRadioButton} onClick={onClick} htmlFor={htmlFor}>{children}</StyledLabel>
  );
};
