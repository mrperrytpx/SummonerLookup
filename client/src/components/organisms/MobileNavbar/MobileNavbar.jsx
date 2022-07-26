import { Disclaimer } from "../../atoms/Disclaimer/Disclaimer";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { StyledMobileNavbar } from "./MobileNavbar.styled";

export const MobileNavbar = () => {
  return (
    <StyledMobileNavbar>
      <LinkButtonCluster variant="mobile">
        <LinkButton variant="quaternary" to="/signin">Sign in</LinkButton>
        <LinkButton variant="quaternary" to="/signup">Sign up</LinkButton>
      </LinkButtonCluster>

      <LinkButtonCluster>
        <IconButtonLink size="46" icon="github" />
        <IconButtonLink size="46" icon="linkedin" />
      </LinkButtonCluster>

      <Disclaimer />
    </StyledMobileNavbar>
  );
};
