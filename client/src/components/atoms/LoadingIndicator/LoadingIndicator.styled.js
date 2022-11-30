import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";
import { spin } from "styled/keyframes";

export const StyledLoadingIndicator = styled(FlexColCenter)`
    position: relative;
    width: 45px;
    height: 45px;
    ${({ center }) => center && `
        margin: auto;
    `}

    & :first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 5px double ${({ theme }) => theme.backgroundColors.quaternary};
        border-radius: 50%;
        border-top: 5px solid ${({ theme }) => theme.backgroundColors.active};
        animation: spin 2s ease-in-out infinite;
        animation-delay: -200ms;
    }

    & :last-child {
        width: 50%;
        height: 50%;
        border: 3px double ${({ theme }) => theme.backgroundColors.quaternary};
        border-top: 3px solid ${({ theme }) => theme.backgroundColors.active};
        animation: ${spin} 2.5s linear infinite;
    }
`;