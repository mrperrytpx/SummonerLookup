import { Link } from "react-router-dom";
import { backgroundColor } from "../../../misc/backgroundColor";
import styled from "styled-components";

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