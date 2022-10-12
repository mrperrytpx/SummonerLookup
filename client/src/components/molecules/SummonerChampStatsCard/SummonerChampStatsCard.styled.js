import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerChampStatsCard = styled(FlexCol)`

    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.backgroundColors.secondary};
    border-radius: 1rem;

    & > span {
        margin-bottom: 0.5rem;
    }
`;