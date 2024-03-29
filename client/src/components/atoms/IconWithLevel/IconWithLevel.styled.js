import styled from "styled-components";
import { FlexColCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledIconWithLevel = styled(FlexColCenter)`
    position: relative;
    background-color: ${({ theme, background }) => (background ? theme.backgroundColors.primary : "transparent")};
    width: ${({ width }) => (width ? width : "auto")};
    max-height: ${({ width }) => (width ? width : "auto")};
    user-select: none;

    ${({ border, theme }) =>
        border &&
        `
        border: 2px solid ${theme.backgroundColors.tertiary};
    `}

    ${({ radius }) =>
        radius &&
        `
        border-radius: ${radius};

        img {
            border-radius: ${radius};
        }

        span {
            border-radius: 0 0 ${radius} 0;
        }
    `}

    img {
        object-fit: fill;
    }

    span {
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.1rem 0.15rem;

        font-size: 0.72rem;
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        color: ${({ theme }) => theme.textColors.light};
    }
`;
