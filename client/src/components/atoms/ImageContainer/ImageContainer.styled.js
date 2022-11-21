import styled from "styled-components";
import { FlexRowCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledImageContainer = styled(FlexRowCenter)`
    background-color: ${({ theme, background }) => background ? theme.backgroundColors.primary : "transparent"};
    width: ${({ width }) => width ? width : "auto"};

    ${({ border }) => border && `
        border  : 1px solid ${border};
    `}

    img[alt] {
        font-size: 0.2rem;
    }
`;