import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledLoadingIndicator = styled(FlexColCenter)`
    position: relative;
    width: 50px;
    height: 50px;
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
    }

    & :last-child {
        width: 50%;
        height: 50%;
        border: 3px double ${({ theme }) => theme.backgroundColors.quaternary};
        border-top: 3px solid ${({ theme }) => theme.backgroundColors.active};
        animation: spin 2.5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;