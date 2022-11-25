import styled from "styled-components";

export const StyledMatchItems = styled.div`
    display: grid;
    grid-template-columns: repeat(7, ${({ initialWidth }) => initialWidth + "px" || "40px"});
    gap: ${({ gap }) => gap || ""};
`;