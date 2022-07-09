import { StyledNavbar } from "./Navbar.styled";
import { TextLogoLink } from "../../atoms/TextLogoLink/TextLogoLink";
import { LinkButtonCluser } from "../../molecules/LinkButtonCluster/LinkButtonCluser";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <TextLogoLink />
      <LinkButtonCluser />
    </StyledNavbar>
  );
};
