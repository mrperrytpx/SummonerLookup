import { StyledNavbar } from "./Navbar.styled";
import { SvgLink } from "../../atoms/SvgLink/SvgLink";
import { LinkButtonCluster } from "../../molecules/LinkButtonCluster/LinkButtonCluster";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useLocation } from "react-router-dom";
import { CompactSearchSummoner } from "../CompactSearchSummoner/CompactSearchSummoner";
import { ReactComponent as SquareLogo } from "../../../assets/square_logo_no_text.svg";
import { ReactComponent as TextLogo } from "../../../assets/txtlogo.svg";
import { useAuth } from "../../../hooks/useAuth";
import { Button } from "../../atoms/Button/Button";

export const Navbar = ({ width, isNavOpen, handleNavOpen, setIsNavOpen }) => {

  const location = useLocation();
  const { tokenLoading, user, signOut, accessToken } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut.mutate({ accessToken });
  };

  return (
    <StyledNavbar>
      {isNavOpen ? <MobileMenu setIsNavOpen={setIsNavOpen} /> : null}
      {width >= 450
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
            {user
              ? !location.pathname.includes("/me") ? <LinkButton variant="quaternary" to="/me">Profile</LinkButton> : null
              : <LinkButton variant="quaternary" to="/signin">Sign in</LinkButton>
            }
            {user
              ? <Button onClick={(e) => handleLogout(e)} variant="danger">Sign Out</Button>
              : <LinkButton variant="quaternary" to="/signup">Sign up</LinkButton>
            }
          </LinkButtonCluster>
          : !isNavOpen
            ? <ImMenu3 fill="white" size="48" onClick={handleNavOpen}></ImMenu3>
            : <ImMenu4 fill="white" size="48" onClick={handleNavOpen}></ImMenu4>
      }


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