import { StyledLinkButton } from "./LinkButton.styled";

export const LinkButton = ({ children, to, variant, onClick }) => {
  return (
    <StyledLinkButton onClick={onClick ? onClick : null} to={to} variant={variant}>{children}</StyledLinkButton>
  );
};