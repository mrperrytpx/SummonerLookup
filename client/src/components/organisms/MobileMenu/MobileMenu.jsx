import { useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../atoms/Button/Button";
import { Disclaimer } from "../../atoms/Disclaimer/Disclaimer";
import { IconButtonLink } from "../../atoms/IconButtonLink/IconButtonLink";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { StyledMobileMenu } from "./MobileMenu.styled";

export const MobileMenu = ({ setIsNavOpen }) => {

  const { signOut, accessToken } = useAuth();
  const location = useLocation();

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut.mutateAsync({ accessToken });
    setIsNavOpen(false);
  };

  return (
    <StyledMobileMenu>
      <LinkButtonCluster variant="mobile">
        {location.pathname !== "/" && <LinkButton minWidth="120px" variant="quaternary" to="/">Home</LinkButton>}
        {accessToken
          ? <LinkButton minWidth="120px" variant="quaternary" to="/me">Profile</LinkButton>
          : <LinkButton minWidth="120px" variant="quaternary" to="/signin">Sign in</LinkButton>
        }
        {accessToken
          ? <Button minWidth="120px" onClick={(e) => handleLogout(e)} variant="danger">Sign Out</Button>
          : <LinkButton minWidth="120px" variant="quaternary" to="/signup">Sign up</LinkButton>
        }
      </LinkButtonCluster>

      <LinkButtonCluster>
        <IconButtonLink size="46" icon="github" />
        <IconButtonLink size="46" icon="linkedin" />
      </LinkButtonCluster>

      <Disclaimer />
    </StyledMobileMenu>
  );
};
