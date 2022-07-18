import styled from "styled-components";

export const StyledLabel = styled.label`
    font-size: 0.8rem;
    text-align: center;

    padding: 0 0.5rem;
    margin-right: .5rem;
    background-color: ${(props) => props.htmlFor === props.checkedRadioButton ? "red" : "white"};
    border: 3px solid red;
`;