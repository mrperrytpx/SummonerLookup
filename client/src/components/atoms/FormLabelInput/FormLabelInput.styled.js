import styled from "styled-components";
import { FlexCol } from "../FlexBoxes/FlexBoxes.styled";

export const StyledFormLabelInput = styled(FlexCol)`
    width: 100%;
    margin: .75rem 0;

    &:last-of-type {
        margin-bottom: 3rem;
    }
    &:first-of-type {
        margin-top: 2rem;
    }
    
    input {
        font-size: 1.1rem;
        padding: 0.7rem .8rem;
        height: 100%;
        background-color: #eeeeee;
        border: none;
        flex: 1;
    }

    label {
        color: white;
        margin-bottom: 0.2rem;
    }
`;