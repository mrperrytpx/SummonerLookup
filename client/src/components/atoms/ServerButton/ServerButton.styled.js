import styled from "styled-components";

export const StyledServerButton = styled.div`
    display: inline-block;
    text-align: center;
    margin-right: .5rem;

    
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 3rem;
        font-size: .9em;
        vertical-align: middle;
        color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.textColors.dark : theme.textColors.light};
        
        padding: 5px 8px;
        
        background-color: ${({ server, checkedRadioButton, theme }) => server === checkedRadioButton ? theme.backgroundColors.active : theme.backgroundColors.tertiary};
        
        transition: background-color 50ms ease-in, color 50ms ease-in;
    }

    input {
        display: none;
    }

`;

// flex row, width 100% container, button div height 100%, label min width 3rem, padding .3rem .5rem