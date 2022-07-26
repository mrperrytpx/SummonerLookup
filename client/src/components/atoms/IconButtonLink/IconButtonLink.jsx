import { FaSearch, FaGithub, FaLinkedin } from "react-icons/fa";
import { StyledIconButtonLink } from "./IconButtonLink.styled";
import { StyledIconButtonAnchor } from "./IconButtonAchor.styled";

export const IconButtonLink = ({ icon }) => {

  switch (icon) {

    case "search": {
      return (
        <StyledIconButtonLink to="/">
          <FaSearch size="40" fill="black" />
        </StyledIconButtonLink>
      );
    }

    case "github": {
      return (
        <StyledIconButtonAnchor rel="noopener noreferrer" href="https://github.com/mrperrytpx/SummonerLookup" target="_blank">
          <FaGithub size="30" fill="white" />
        </StyledIconButtonAnchor>
      );
    }

    case "linkedin": {
      return (
        <StyledIconButtonAnchor rel="noopener noreferrer" href="https://www.linkedin.com/" target="_black">
          <FaLinkedin size="30" fill="white" />;
        </StyledIconButtonAnchor>
      );
    }

    default: {
      return <p>Correct icon pls</p>;
    }
  }
};
