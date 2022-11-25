import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerChampStatsCard = styled(FlexCol)`
    width: 100%;
    align-self: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
    gap: .5rem;
    margin-bottom: .5rem;

    position: sticky;
    top: 0;
`;