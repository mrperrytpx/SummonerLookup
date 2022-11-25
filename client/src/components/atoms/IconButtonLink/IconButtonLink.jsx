import { FaSearch, FaGithub, FaLinkedin } from "react-icons/fa";
import { StyledIconButtonLink } from "./IconButtonLink.styled";
import { StyledIconButtonAnchor } from "./IconButtonAchor.styled";

export const IconButtonLink = ({ size, icon, server, summonerName }) => {

  switch (icon) {
    case "search": {
      return (
        <StyledIconButtonLink disabled={summonerName ? false : true} to={`/${server}/${summonerName}/`}>
          <FaSearch size="30" fill="#283655" />
        </StyledIconButtonLink>
      );
    }

    case "github": {
      return (
        <StyledIconButtonAnchor rel="noopener noreferrer" href="https://github.com/mrperrytpx/SummonerLookup" target="_blank">
          <FaGithub size={size ? size : "30"} fill="white" />
        </StyledIconButtonAnchor>
      );
    }

    case "linkedin": {
      return (
        <StyledIconButtonAnchor rel="noopener noreferrer" href="https://www.linkedin.com/" target="_black">
          <FaLinkedin size={size ? size : "30"} fill="white" />
        </StyledIconButtonAnchor>
      );
    }

    default: {
      return <p>Correct icon pls</p>;
    }
  }
};