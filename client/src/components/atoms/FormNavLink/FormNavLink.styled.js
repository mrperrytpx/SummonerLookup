import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledFormNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    user-select: none;

    flex: 1;
    height: 100%;
    min-width: 100px;
    padding: 0.5em 0;
    opacity: 25%;
    background-color: ${({ theme }) => theme.backgroundColors.tertiary};

    color: ${({ theme }) => theme.textColors.light};
    text-align: center;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;

    ${({ active, theme }) =>
        active &&
        `
        opacity: 100%;
        border-bottom: 5px solid white;
        color: ${theme.textColors.dark};
        background-color: ${theme.backgroundColors.active};
    `}
`;
