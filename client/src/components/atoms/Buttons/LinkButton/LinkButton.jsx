import { StyledLinkButton } from "./LinkButton.styled";
import PropTypes from "prop-types";

export const LinkButton = ({ children, href, variant }) => {
  return (
    <StyledLinkButton to={href} variant={variant}>{children}</StyledLinkButton>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string
};

LinkButton.defaultProps = {
  variant: "quaternary",
  children: "Button text"
};