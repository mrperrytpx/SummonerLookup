import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerMatches = styled(FlexCol)`
    gap: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    padding: 1rem;
    border-radius: 1rem;
`;