import styled from "styled-components";
import { FlexRowCenter } from "../FlexBoxes/FlexBoxes.styled";

export const StyledImageContainer = styled(FlexRowCenter)`
    img {
        aspect-ratio: 1 / 1;
        width: ${({ width }) => width};
    }
`;