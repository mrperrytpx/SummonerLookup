import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCustomLink = styled(Link)`
        color: white;
        border-bottom: 1px solid white;
        text-decoration: none;

        &:hover {
                color: ${({ theme }) => theme.backgroundColors.quaternary};
                border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};

        }

`;