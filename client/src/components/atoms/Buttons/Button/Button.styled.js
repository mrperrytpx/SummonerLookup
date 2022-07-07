import styled from "styled-components";
import { Link } from "react-router-dom";

function backgroundColor(theme, variant) {
    if (!variant) return theme.backgroundColors.primary;
    switch (variant) {
        case "quaternary": {
            return theme.backgroundColors.quaternary;
        }
        case "tertiary": {
            return theme.backgroundColors.tertiary;
        }
        case "secondary": {
            return theme.backgroundColors.secondary;
        }
        case "primary": {
            return theme.backgroundColors.primary;
        }
        default: {
            return theme.backgroundColors.quaternary;
        }
    }
}

export const StyledButton = styled.button`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: inline-block;
    height: 100%;
    min-width: 100px;
    padding: .5em;
    border: none;

    color: ${({ theme }) => theme.textColors.light};
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;
`;

export const StyledLinkButton = styled(Link)`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: inline-block;
    height: 100%;
    min-width: 100px;
    padding: .5em;
    border: none;

    color: ${({ theme }) => theme.textColors.light};
    text-align: center;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;
`;