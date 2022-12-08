import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";
import { spin } from "styled/keyframes";

export const StyledLoadingIndicator = styled(FlexColCenter)`
    position: relative;
    width: ${({ size }) => size || "45px"};
    height: ${({ size }) => size || "45px"};
    ${({ center }) => center && `
        margin: 0 auto;
    `}

    ${({ margin }) => margin && `
        margin: ${margin};
    `}

    & :first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 5px double ${({ theme, variant }) => variant ? variant : theme.backgroundColors.quaternary};
        border-radius: 50%;
        border-top: 5px solid ${({ theme, variant }) => variant ? variant : theme.backgroundColors.active};
        animation: ${spin} 2s ease-in-out infinite;
        animation-delay: -1000ms;
    }

    & :last-child {
        width: 50%;
        height: 50%;
        border: 3px double ${({ theme, variant }) => variant ? variant : theme.backgroundColors.quaternary};
        border-top: 3px solid ${({ theme, variant }) => variant ? variant : theme.backgroundColors.active};
        animation: ${spin} 2.5s linear infinite;
    }
`;