import styled from "styled-components";

export const StyledErrorText = styled.p`
    color: ${({ theme }) => theme.textColors.light};
    padding: .5rem 0;
    width: 100%;
    text-align: ${({ center }) => center ? "center" : "left"};
    font-size: ${({ size }) => size || ".8rem"}
`;