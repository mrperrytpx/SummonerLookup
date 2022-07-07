import { StyledLinkButton } from "./Button.styled";
import PropTypes from "prop-types";

export const LinkButton = ({ children, href, variant }) => {
  return (
    <StyledLinkButton to={href} variant={variant}>{children}</StyledLinkButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string
};

Button.defaultProps = {
  variant: "quaternary",
  children: "Button text"
};