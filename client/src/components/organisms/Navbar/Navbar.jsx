import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";

import { StyledNavbar } from "./Navbar.styled";
import { TextLogoLink } from "../../atoms/TextLogoLink/TextLogoLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { FlexRowSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const Navbar = ({ width, isNavOpen, handleNavOpen }) => {

  return (
    <StyledNavbar as="nav">
      {width >= 600
        ? <>
          <TextLogoLink to="/" />
          <LinkButtonCluster>
            <LinkButton variant="quaternary" to="/signin">Sign in</LinkButton>
            <LinkButton variant="quaternary" to="/signup">Sign up</LinkButton>
          </LinkButtonCluster>
        </>
        : <FlexRowSpaceBetween style={{ width: "100%" }}>
          <SquareLogo fill="white" width="70" />
          {!isNavOpen
            ? <ImMenu3 fill="white" size="48" onClick={handleNavOpen}></ImMenu3>
            : <ImMenu4 fill="white" size="48" onClick={handleNavOpen}></ImMenu4>
          }
        </FlexRowSpaceBetween>
      }
    </StyledNavbar>
  );
};