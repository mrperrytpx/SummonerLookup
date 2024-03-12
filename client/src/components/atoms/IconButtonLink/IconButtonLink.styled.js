import styled from "styled-components";
import { Link } from "react-router-dom";
import { jump } from "styled/keyframes";

export const StyledIconButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 5px 0 3px; */
    cursor: pointer;
    min-width: 52px;

    opacity: ${({ disabled }) => (disabled ? "0.25" : "1")};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "")};

    &:hover,
    &:focus {
        animation: ${jump} 0.1s linear;
    }

    &:disabled {
        animation: none;
    }
`;
