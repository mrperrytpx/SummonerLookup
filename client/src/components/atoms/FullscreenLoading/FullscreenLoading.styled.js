import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledFullscreenLoading = styled(FlexColCenter)`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColors.primary};

    & > svg {
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

`;