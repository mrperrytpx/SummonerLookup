import { StyledNavbar } from "./Navbar.styled";
import { TextLogoLink } from "../../atoms/TextLogoLink/TextLogoLink";
import { LinkButtonCluser } from "../../molecules/LinkButtonCluster/LinkButtonCluster";

export const Navbar = () => {
  return (
    <StyledNavbar as="nav">
      <TextLogoLink />
      <LinkButtonCluser />
    </StyledNavbar>
  );
};
