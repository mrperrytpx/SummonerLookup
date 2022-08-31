import styled from "styled-components";
import { FlexCol } from "../FlexBoxes/FlexBoxes.styled";

export const StyledFormLabelInput = styled(FlexCol)`
    width: 100%;
    margin: .75rem 0 0 0;
    
    &:first-of-type {
        margin-top: 2rem;
    }

    input {
        font-size: 1.1rem;
        padding: 0.7rem .8rem;
        height: 100%;
        background-color: #eeeeee;
        border: ${({ errors, theme }) => errors ? `3px solid ${theme.backgroundColors.danger}` : "none"};
        flex: 1;
    }

    label {
        color: white;
        margin-bottom: 0.2rem;
    }
`;