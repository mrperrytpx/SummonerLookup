import { useState } from "react";
import { StyledExpandingMenu } from "./ExpandigMenu.styled";

export const ExpandingMenu = ({ label }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledExpandingMenu onClick={() => setIsExpanded((prev) => !prev)}>
      <span>{label}</span>
      {isExpanded &&
        <p>Expanded {label}</p>
      }
    </StyledExpandingMenu>
  );
};
