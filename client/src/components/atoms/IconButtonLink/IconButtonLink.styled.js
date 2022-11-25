import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledIconButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 3px;
    cursor: pointer;
    pointer-events: ${(props) => props.disabled ? 'none' : ''};
`;