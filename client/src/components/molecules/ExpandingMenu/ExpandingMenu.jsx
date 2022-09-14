import { useState } from "react";
import { StyledExpandingMenu } from "./ExpandigMenu.styled";

export const ExpandingMenu = ({ children, expanded = false, label }) => {

  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <StyledExpandingMenu onClick={() => setIsExpanded((prev) => !prev)}>
      <span>{label}</span>
      {isExpanded ? children : null}
    </StyledExpandingMenu>
  );
};
