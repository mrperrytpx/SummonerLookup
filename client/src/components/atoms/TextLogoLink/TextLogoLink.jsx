import { ReactComponent as TextLogo } from "../../../assets/txtlogo.svg";
import { StyledTextLogoLink } from "./TextLogolink.styled";
import PropTypes from "prop-types";

export const TextLogoLink = ({ to }) => {
  return (
    <StyledTextLogoLink to={to}>
      <TextLogo />
    </StyledTextLogoLink>
  );
};

TextLogoLink.propTypes = {
  to: PropTypes.string
};

TextLogoLink.defaultProps = {
  to: "/"
};