import styled from "styled-components";

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: ${({ cols }) => cols || "1f"};
    grid-template-rows: ${({ rows }) => rows || "1fr"};
    gap: ${({ gap }) => gap || ""};
`;