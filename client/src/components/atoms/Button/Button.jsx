import StyledButton from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ children, href, onClick }) => {
  return (
    <StyledButton>{children}</StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;