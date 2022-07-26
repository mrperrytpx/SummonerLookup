import { StyledLinkButton } from "./LinkButton.styled";

export const LinkButton = ({ children, to, variant }) => {
  return (
    <StyledLinkButton to={to} variant={variant}>{children}</StyledLinkButton>
  );
};