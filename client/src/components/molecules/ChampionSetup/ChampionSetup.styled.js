import { FlexRow } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledChampionSetup = styled(FlexRow)`
    background-color: black;
    ${({ position }) =>
        position &&
        `
        justify-content: ${position};
        align-items: ${position};
    `}
`;
