import styled from "styled-components";
import { FlexRowCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledImageContainer = styled(FlexRowCenter)`
    background-color: ${({ theme, background }) => background ? theme.backgroundColors.primary : "transparent"};
    max-width: ${({ max }) => max};

    img {
        aspect-ratio: 1 / 1;
        width: ${({ width }) => width};
        max-width: ${({ max }) => max};
    }
`;