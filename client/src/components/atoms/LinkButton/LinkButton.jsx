import { StyledLinkButton } from "./LinkButton.styled";

export const LinkButton = ({ children, to, variant, onClick, ...rest }) => {
  return (
    <StyledLinkButton
      {...rest}
      onClick={onClick ? onClick : null}
      to={to}
      variant={variant}
    >
      {children}
    </StyledLinkButton>
  );
};