import styled from "styled-components";
import { FlexCol } from "../FlexBoxes/FlexBoxes.styled";

export const StyledFormLabelInput = styled(FlexCol)`
    width: 100%;
    margin: 0.75rem 0 0 0;

    &:first-of-type {
        margin-top: 2rem;
    }

    input {
        flex: 1;
        height: 100%;
        padding: 0.7rem 0.8rem;
        font-size: 1.1rem;
        background-color: #eeeeee;
        border: ${({ errors, theme }) => (errors ? `3px solid ${theme.backgroundColors.danger}` : "none")};
    }

    label {
        color: white;
        margin-bottom: 0.2rem;
    }
`;
