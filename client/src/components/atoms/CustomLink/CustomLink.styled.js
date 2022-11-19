import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCustomLink = styled(Link)`
        color: white;
        text-decoration: none;
        text-overflow: ellipsis;
        overflow-x: hidden;
        place-self: center start;
        width: 100%;
        max-width: ${({ max }) => max ? max : "100px"};
        white-space: pre;

        ${({ border }) => border && `
                border-bottom: ${border};
        `}

        ${({ fontSize }) => fontSize && `
                font-size: ${fontSize};
        `}

        ${({ align }) => align && `
                text-align: ${align};
        `}

        &:hover {
                color: ${({ theme }) => theme.backgroundColors.quaternary};
        }
`;