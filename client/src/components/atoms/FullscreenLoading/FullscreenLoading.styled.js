import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";
import { spin } from "styled/keyframes";

export const StyledFullscreenLoading = styled(FlexColCenter)`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColors.primary};

    & > svg {
        animation: ${spin} 10s linear infinite;
    }
`;