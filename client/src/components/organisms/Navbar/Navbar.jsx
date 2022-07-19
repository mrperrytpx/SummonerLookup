import { StyledNavbar } from "./Navbar.styled";
import { TextLogoLink } from "../../atoms/TextLogoLink/TextLogoLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";

export const Navbar = () => {
  return (
    <StyledNavbar as="nav">
      <TextLogoLink />
      <LinkButtonCluster>
        <LinkButton variant="quaternary" href="/signin">Sign in</LinkButton>
        <LinkButton variant="quaternary" href="/signup">Sign up</LinkButton>
      </LinkButtonCluster>
    </StyledNavbar>
  );
};
