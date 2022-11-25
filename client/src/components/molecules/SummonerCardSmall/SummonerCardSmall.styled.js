import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSummonerCardSmall = styled(Link)`
    margin: 0.4rem;
    display: inline-block;
    padding: 1rem;

    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 0 2px 0px white inset, 0 0 2px 0px white;
    color: ${({ theme }) => theme.textColors.light};
    text-decoration: none;
    user-select: none;
    
    &:hover {
        border: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
        color: ${({ theme }) => theme.backgroundColors.quaternary};
    }
`;