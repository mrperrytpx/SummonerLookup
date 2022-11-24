import { Link } from "react-router-dom";
import { backgroundColor } from "../../../misc/backgroundColor";
import styled from "styled-components";

export const StyledLinkButton = styled(Link)`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};
    box-shadow: 0px 1px 4px rgba(255, 255, 255, 0.25);

    display: inline-block;
    height: 100%;
    ${({ minWidth }) => minWidth && `
        min-width: ${minWidth};
    `}
    padding: .5em;
    border: none;
    border-radius: 5px;

    color: ${({ theme }) => theme.textColors.light};
    text-align: center;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;
`;