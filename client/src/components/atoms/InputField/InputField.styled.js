import styled from "styled-components";

export const StyledInputField = styled.input`
    flex: 1;
    width: 0;
    padding: 0.7rem 1rem;
    height: 100%;
    background-color: #eeeeee;
    border: none;
    border-radius: 5px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.2rem")};
`;
