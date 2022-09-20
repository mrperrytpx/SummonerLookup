import { useState } from "react";
import { StyledExpandingMenu } from "./ExpandigMenu.styled";
import { FaGreaterThan } from "react-icons/fa";

export const ExpandingMenu = ({ children, expanded = false, label }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <StyledExpandingMenu isExpanded={isExpanded}>
      <span onClick={() => setIsExpanded((prev) => !prev)}><FaGreaterThan />{label}</span>
      {isExpanded ? children : null}
    </StyledExpandingMenu>
  );
};
