import styled from "styled-components";

export const StyledMatchItems = styled.div`
    display: grid;
    grid-template-columns: repeat(7, ${({ initialWidth }) => initialWidth + "px" || "40px"});
    gap: ${({ gap }) => gap || ""};
    background-color: black;
    gap: 0.1rem;

    [data-empty] {
        background-color: #343433;
        opacity: 0.5;
    }
`;