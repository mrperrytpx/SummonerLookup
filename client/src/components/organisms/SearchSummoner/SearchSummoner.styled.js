import styled from "styled-components";
import { FlexColCenter } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSearchSummoner = styled(FlexColCenter)`
    width: min(95%, 750px);
    max-width: 1080px;
    margin: 0 auto;
    height: calc(100vh - 1rem - 80px);
    padding-bottom: 7rem;
    gap: 1rem;
`;