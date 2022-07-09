import { ReactComponent as TextLogo } from "../../../assets/txtlogo.svg";
import { StyledTextLogoLink } from "./TextLogolink.styled";

export const TextLogoLink = () => {
  return (
    <StyledTextLogoLink to="/">
      <TextLogo />
    </StyledTextLogoLink>
  );
};
