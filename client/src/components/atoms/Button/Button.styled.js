import styled from "styled-components";
import { backgroundColor } from "../../../misc/backgroundColor";

export const StyledButton = styled.button`
    background-color: ${({ theme, variant }) => backgroundColor(theme, variant)};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* min-width: 100px; */
    width: min(${({ wide }) => wide ? "75%" : ""}, 200px);
    padding: .5em 1em;
    border: none;

    color: ${({ theme, variant }) => variant === "danger" ? theme.textColors.light : theme.textColors.dark};
    text-align: center;
    vertical-align: middle;
    font-size: 1.1rem;
    font-weight: 600;

    cursor: pointer;

    &:disabled {
        cursor: initial;
        opacity: 0.15;
    }
`;