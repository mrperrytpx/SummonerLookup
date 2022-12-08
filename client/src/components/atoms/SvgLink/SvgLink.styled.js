import { Link } from "react-router-dom";
import styled from "styled-components";
import { jump } from "styled/keyframes";

export const StyledSvgLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

    &:hover, &:focus {
        animation: ${jump} 0.1s linear;
    }
`;