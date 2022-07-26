import { ReactComponent as TextLogo } from "../../../assets/txtlogo.svg";
import { StyledTextLogoLink } from "./TextLogolink.styled";

export const TextLogoLink = ({ to }) => {
  return (
    <StyledTextLogoLink to={to}>
      <TextLogo fill="white" />
    </StyledTextLogoLink>
  );
};
