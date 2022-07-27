import { useLocation } from "react-router-dom";
import { Disclaimer } from "../../atoms/Disclaimer/Disclaimer";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { StyledMobileMenu } from "./MobileMenu.styled";

export const MobileMenu = ({ setIsNavOpen }) => {

  const location = useLocation();
  return (
    <StyledMobileMenu>
      <LinkButtonCluster variant="mobile">
        {location.pathname !== "/"
          ? <LinkButton onClick={() => setIsNavOpen(false)} variant="secondary" to="/">Home</LinkButton>
          : null}
        <LinkButton onClick={() => setIsNavOpen(false)} variant="quaternary" to="/signin">Sign in</LinkButton>
        <LinkButton onClick={() => setIsNavOpen(false)} variant="quaternary" to="/signup">Sign up</LinkButton>
      </LinkButtonCluster>

      <LinkButtonCluster>
        <IconButtonLink size="46" icon="github" />
        <IconButtonLink size="46" icon="linkedin" />
      </LinkButtonCluster>

      <Disclaimer />
    </StyledMobileMenu>
  );
};
