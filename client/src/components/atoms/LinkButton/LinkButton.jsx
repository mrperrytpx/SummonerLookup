import { StyledLinkButton } from "./LinkButton.styled";

export const LinkButton = ({ children, href, variant }) => {
  return (
    <StyledLinkButton to={href} variant={variant}>{children}</StyledLinkButton>
  );
};