import styled from "styled-components";

export const StyledErrorText = styled.p`
    padding: .5rem 0;
    width: 100%;
    color: ${({ theme }) => theme.textColors.light};
    text-align: ${({ center }) => center ? "center" : "left"};
    font-size: ${({ size }) => size || ".8rem"}
`;