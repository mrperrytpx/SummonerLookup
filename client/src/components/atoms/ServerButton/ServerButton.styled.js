import styled from "styled-components";

export const StyledServerButton = styled.div`
    display: inline-block;
    height: 100%;

    label {
        display: inline-block;
        min-width: 3rem;
        font-size: 0.9rem;
        text-align: center;
        color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.textColors.dark : theme.textColors.light};
        
        padding: .3rem .5rem;
        margin-right: .5rem;
        
        background-color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.backgroundColors.active : theme.backgroundColors.tertiary};
        
        transition: background-color 50ms ease-in, color 50ms ease-in;
    }

    input {
        display: none;
    }

`;