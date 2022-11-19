import styled from "styled-components";
import { FlexRowCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledImageContainer = styled(FlexRowCenter)`
    background-color: ${({ theme, background }) => background ? theme.backgroundColors.primary : "transparent"};
    max-width: ${({ max }) => max};

    ${({ radius }) => radius && `
        border-radius: ${radius};

        img {
            border-radius: ${radius};
        }
    `}

    ${({ min }) => min && `
        min-width: ${min};
        min-height: ${min}

        img {
            min-width: ${min};
            min-height: ${min}
        }
    `}

    ${({ border }) => border && `
        border: 2px solid ${border};
    `}

    img {
        aspect-ratio: 1 / 1;
        width: ${({ width }) => width};
        max-width: ${({ max }) => max};
        min-width: ${({ max }) => max};
        &[alt] {
            font-size: 0.6rem;
        }
    }
`;