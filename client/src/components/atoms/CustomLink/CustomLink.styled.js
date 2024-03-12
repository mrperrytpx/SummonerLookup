import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCustomLink = styled(Link)`
    color: white;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: pre;
    ${({ align }) =>
        align &&
        `
                text-align: ${align};
        `}
    ${({ fontSize }) =>
        fontSize &&
        `
                font-size: ${fontSize};
        `}
        ${({ underline }) =>
        underline &&
        `
                text-decoration: underline;
        `}

    overflow-x: hidden;
    place-self: center start;

    user-select: none;

    width: 100%;
    max-width: ${({ max }) => (max ? max : "100px")};

    ${({ border }) =>
        border &&
        `
                border-bottom: ${border};
        `}

    &:hover, &:focus {
        text-decoration: underline;
    }
`;
