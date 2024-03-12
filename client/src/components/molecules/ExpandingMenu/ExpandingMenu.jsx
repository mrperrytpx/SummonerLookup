import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { StyledExpandingMenu } from "./ExpandigMenu.styled";

export const ExpandingMenu = ({ children, expanded = false, label }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const handleKeyboardToggle = (e) => {
        if (e.code === "Space" || e.code === "Enter") {
            setIsExpanded(!isExpanded);
            return;
        }
        return;
    };

    return (
        <StyledExpandingMenu isExpanded={isExpanded}>
            <span
                onKeyDown={(e) => handleKeyboardToggle(e)}
                tabIndex="0"
                onClick={() => setIsExpanded((prev) => !prev)}
            >
                <FaGreaterThan />
                {label}
            </span>
            {isExpanded ? children : null}
        </StyledExpandingMenu>
    );
};
