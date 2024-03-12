import styled from "styled-components";
import { backgroundColor } from "../../../styled/backgroundColor";
import { jump } from "styled/keyframes";
import { FlexRowCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledButton = styled(FlexRowCenter).attrs({ as: "button" })`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};

    ${({ minwidth }) =>
        minwidth &&
        `
        min-width: ${minwidth};
    `}
    width: ${({ width }) => width || "auto"};
    padding: ${({ padding }) => padding || ".5em 1em"};
    border: none;
    border-radius: 5px;

    color: ${({ theme, variant }) =>
        variant === "danger" || variant === "tertiary" || variant === "quaternary"
            ? theme.textColors.light
            : theme.textColors.dark};
    text-align: center;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.1rem")};
    font-weight: 600;

    user-select: none;

    cursor: pointer;

    &:hover,
    &:focus {
        animation: ${jump} 0.1s linear;
    }

    &:disabled {
        cursor: initial;
        opacity: 0.15;
        animation: none;
    }
`;
