import styled from "styled-components";
import { FlexCol, FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerChampStatsCard = styled.div`

    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;

    & > span {
        margin-bottom: 1rem;
    }
`;