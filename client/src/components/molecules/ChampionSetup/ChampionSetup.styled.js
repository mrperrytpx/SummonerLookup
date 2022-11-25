import { FlexRow } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledChampionSetup = styled(FlexRow)`
    ${({ position }) => position && `
        justify-content: ${position};
        align-items: ${position};
    `} 
`;