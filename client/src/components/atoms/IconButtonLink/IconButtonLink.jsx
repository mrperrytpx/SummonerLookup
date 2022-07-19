import { FaSearch, FaGithub, FaLinkedin } from "react-icons/fa";
import { StyledIconButtonLink } from "./IconButtonLink.styled";

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
      return <FaGithub size="30" fill="white" />;
    }
    case "linkedin": {
      return <FaLinkedin size="30" fill="white" />;
    }
    default: {
      return <p>Correct icon pls</p>;
    }
  }
};
