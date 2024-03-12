import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSummonerCardSmall = styled(Link)`
    display: inline-block;
    padding: 1rem;

    border-radius: 5px;
    color: ${({ theme }) => theme.textColors.light};
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    text-decoration: none;
    user-select: none;

    &:hover,
    &:focus {
        box-shadow: 0 0 2px 0px ${({ theme }) => theme.backgroundColors.quaternary} inset,
            0 0 2px 0px ${({ theme }) => theme.backgroundColors.quaternary};
        outline: 1px solid ${({ theme }) => theme.backgroundColors.quaternary};
        color: ${({ theme }) => theme.backgroundColors.active};
    }
`;
