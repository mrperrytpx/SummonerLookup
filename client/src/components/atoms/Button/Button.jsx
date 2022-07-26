import { StyledButton } from "./Button.styled";

export const Button = ({ children, onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>{children}</StyledButton>
  );
};