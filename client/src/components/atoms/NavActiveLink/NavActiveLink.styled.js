import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavActiveLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.textColors.light};
    font-size: 1rem;
    white-space: pre;
    padding: 0.5em 1em;
    display: block;
    font-weight: 600;
    text-transform: uppercase;

    ${({ active, theme }) => active && `
        &:after {
            content:"";
            display: block;
            width: 100%;
            margin: 0 auto;
            border-bottom: 2px solid ${theme.backgroundColors.active};
        }
    `}
`;