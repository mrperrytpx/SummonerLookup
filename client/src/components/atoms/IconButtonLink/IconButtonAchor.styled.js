import styled from "styled-components";
import { jump } from "styled/keyframes";

export const StyledIconButtonAnchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        animation: ${jump} 0.1s linear;
    }
`;