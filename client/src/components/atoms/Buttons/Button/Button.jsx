import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>{children}</StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

Button.defaultProps = {
  variant: "quaternary",
  children: "Button text"
};