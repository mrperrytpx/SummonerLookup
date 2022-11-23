import styled from "styled-components";
import { FlexRowCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledImageContainer = styled(FlexRowCenter)`
    background-color: ${({ theme, background }) => background ? theme.backgroundColors.primary : "transparent"};
    width: ${({ width }) => width ? width : "auto"};
    aspect-ratio: 1 / 1;

    ${({ min }) => min && `
        min-width: ${min};

        img {
            min-widtH+h: ${min};
        }
    `}

    ${({ border }) => border && `
        border : 1px solid ${border};
    `}

    ${({ radius }) => radius && `
        border-radius: ${radius};
    `}

    img {
        object-fit: cover;
        &[alt] {
            font-size: 0.2rem;
        }

        ${({ opacity }) => opacity && `
            opacity: ${opacity};
        `}
    }
`;