import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { StyledExpandingMenu } from "./ExpandigMenu.styled";

export const ExpandingMenu = ({ children, expanded = false, label }) => {

  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <StyledExpandingMenu isExpanded={isExpanded}>
      <span onClick={() => setIsExpanded((prev) => !prev)}><FaGreaterThan />{label}</span>
      {isExpanded ? children : null}
    </StyledExpandingMenu>
  );
};
