import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledHome = styled(FlexColStart).attrs({ as: "main" })`
    justify-content: ${(props) => props.center ? "center" : "flex-start"};
    min-height: calc(max(600px, 100vh) - 1rem - 60px); 
    margin: auto;
    gap: 2rem;
    z-index: 2;
    position: relative;
    overflow: hidden;
`;