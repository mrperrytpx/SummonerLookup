import styled from "styled-components";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerChampStatsCard = styled(FlexCol)`
    top: 0;
    position: sticky;
    width: 100%;
    padding: 1rem;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    align-self: center;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;
`;
