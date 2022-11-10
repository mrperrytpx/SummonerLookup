import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavActiveLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.textColors.light};
    font-size: 1.1rem;
    padding: 0.5em 1em;
    display: block;
    white-space: pre;

    ${({ active, theme }) => active && `
        &:after {
            content:"";
            display: block;
            width: 95%;
            margin: 0 auto;
            border-bottom: 2px solid ${theme.backgroundColors.active};
        }
    `}
`;