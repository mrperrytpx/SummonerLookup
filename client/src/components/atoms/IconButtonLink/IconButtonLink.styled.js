import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledIconButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 5px 0 3px;
    justify-content: center;
    cursor: pointer;
    pointer-events: ${(props) => props.disabled ? 'none' : ''};
`;