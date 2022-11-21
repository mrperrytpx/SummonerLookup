import styled from "styled-components";

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
        font-size: .9em;
        color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.textColors.dark : theme.textColors.light};
    
        padding: 5px 8px;
        
        background-color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.backgroundColors.active : theme.backgroundColors.tertiary};
        
        transition: background-color 50ms ease-in, color 50ms ease-in;
        font-weight: 500;
        border-radius: 3px;

    }

    input {
        display: none;

    }

`;