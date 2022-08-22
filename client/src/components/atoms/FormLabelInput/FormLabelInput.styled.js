import styled from "styled-components";
import { FlexCol } from "../FlexBoxes/FlexBoxes.styled";

export const StyledFormLabelInput = styled(FlexCol)`
    width: 100%;
    
    input {
        font-size: 1.2rem;
        padding: 0.7rem 1rem;
        height: 100%;
        background-color: #eeeeee;
        border: none;
        flex: 1;
    }

    label {
        color: white;
    }
`;