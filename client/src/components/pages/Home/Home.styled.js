import styled from "styled-components";
import { FlexColStart } from "../../atoms/FlexBoxes/FlexBoxes.styled";
import { bodyHeight } from "consts/cssVals";

export const StyledHome = styled(FlexColStart).attrs({ as: "main" })`
    justify-content: ${(props) => (props.center ? "center" : "flex-start")};
    min-height: ${bodyHeight};
    margin: auto;
    gap: 2rem;
    z-index: 2;
    position: relative;
    overflow: hidden;
`;
