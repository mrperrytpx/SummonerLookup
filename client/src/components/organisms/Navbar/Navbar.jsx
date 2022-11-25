import { useLocation } from "react-router-dom";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { StyledNavbar } from "./Navbar.styled";
import { ReactComponent as TextLogo } from "../../../assets/txtlogo.svg";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { Button } from "../../atoms/Button/Button";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { CompactSearchSummoner } from "../CompactSearchSummoner/CompactSearchSummoner";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useScreenSize } from "hooks/useScreenSize";
import { useAuth } from "../../../hooks/useAuth";

export const Navbar = ({ isNavOpen, handleNavOpen, setIsNavOpen }) => {

  const location = useLocation();

  const { width } = useScreenSize();
  const { tokenLoading, signOut, accessToken } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut.mutateAsync({ accessToken });
  };

  return (
    <StyledNavbar isNavOpen={isNavOpen}>
      {width >= 450
        // rendering different logos depending on width
        ? <SvgLink to="/">
          {location.pathname === "/"
            ? <TextLogo fill="white" />
            : width >= 1100
              ? <TextLogo fill="white" />
              : <SquareLogo fill="white" width="60" />
          }
        </SvgLink>
        : null
      }
      {location.pathname !== "/" && !isNavOpen ? <CompactSearchSummoner /> : null}
      {tokenLoading ? <p style={{ color: "white" }}>Loading</p> :
        width >= 750
          ? <LinkButtonCluster>
            {accessToken
              ? !location.pathname.includes("/me") ? <LinkButton minwidth="100px" state={{ from: location.pathname }} variant="quaternary" to="/me">Profile</LinkButton> : null
              : <LinkButton minwidth="100px" state={{ from: location.pathname }} variant="quaternary" to="/signin">Sign in</LinkButton>
            }
            {accessToken
              ? <Button onClick={(e) => handleLogout(e)} variant="danger">Sign Out</Button>
              : <LinkButton minwidth="100px" state={{ from: location.pathname }} variant="quaternary" to="/signup">Sign up</LinkButton>
            }
          </LinkButtonCluster>
          : !isNavOpen
            ? <ImMenu3 style={{ minWidth: "48px" }} fill="white" size="48" onClick={handleNavOpen}></ImMenu3>
            : <ImMenu4 style={{ minWidth: "48px" }} fill="white" size="48" onClick={handleNavOpen}></ImMenu4>
      }
      {isNavOpen && <MobileMenu setIsNavOpen={setIsNavOpen} />}
    </StyledNavbar>
  );
};

// if width is >= 750
//   render link cluster
// else render correct navigation icon
//   as long as nav open state is false

// if it's not homepage and nav isn't open
//   render search bar with dropdown

// if width is >= 600
//   render a svg link
//     if it's homepage, always render textlogo
//     if it's nothomepage and width is >= 1100
//       render textlogo
//       else render squarelogo