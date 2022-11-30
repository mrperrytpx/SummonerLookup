import styled from "styled-components";
import { backgroundColor } from "../../../styled/backgroundColor";
import { jump } from "styled/keyframes";

export const StyledButton = styled.button`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};
    
    ${({ minwidth }) => minwidth && `
        min-width: ${minwidth};
    `}
    width: ${({ width }) => width || "auto"};
    padding: ${({ padding }) => padding || ".5em 1em"};
    border: none;
    border-radius: 5px;
    
    color: ${({ theme, variant }) => variant === "danger" || variant === "tertiary" || variant === "quaternary" ? theme.textColors.light : theme.textColors.dark};
    white-space: pre;
    text-align: center;
    vertical-align: middle;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;

    &:disabled {
        cursor: initial;
        opacity: 0.15;
    }

    &:hover {
        animation: ${jump} 0.1s linear;
    }
`;