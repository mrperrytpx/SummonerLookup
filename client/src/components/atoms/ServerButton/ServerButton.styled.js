import styled from "styled-components";
import { jump } from "styled/keyframes";

export const StyledServerButton = styled.div`
    display: inline-block;
    text-align: center;
    margin-right: .5rem;

    label {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 3rem;
        padding: 5px 8px;
        font-size: .9em;
        color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.textColors.dark : theme.textColors.light};

        background-color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.backgroundColors.active : theme.backgroundColors.tertiary};
        
        transition: background-color 50ms ease-in, color 50ms ease-in;
        font-weight: 500;
        border-radius: 3px;

        &:hover, &:focus {
            animation: ${jump} .1s ease-out;
        }
    }

    input {
        display: none;

    };
`;