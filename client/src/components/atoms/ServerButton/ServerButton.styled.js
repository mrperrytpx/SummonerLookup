import styled from "styled-components";
import { jump } from "styled/keyframes";

export const StyledServerButton = styled.div`
    display: inline-block;
    text-align: center;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    min-width: 50px;
    user-select: none;

    label {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 3rem;
        padding: 4px 0;
        font-size: 0.9em;
        color: ${({ server, checkedRadioButton, theme }) =>
            server === checkedRadioButton ? theme.textColors.dark : theme.textColors.light};

        background-color: ${({ server, checkedRadioButton, theme }) =>
            server === checkedRadioButton ? theme.backgroundColors.active : theme.backgroundColors.tertiary};

        transition: background-color 50ms ease-in, color 50ms ease-in;
        font-weight: 500;
        border-radius: 3px;

        &:hover,
        &:focus {
            animation: ${jump} 0.1s ease-out;
        }
    }

    input {
        display: none;
    }
`;
