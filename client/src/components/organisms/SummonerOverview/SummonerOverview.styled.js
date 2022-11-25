import styled from "styled-components";
import { FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerOverview = styled(FlexRow)`
    color: ${({ theme }) => theme.textColors.light};
    gap: 0.5rem;
    margin-bottom: 7rem;

    [data-stats] {
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 1000px) {
        flex-direction: column-reverse;

        [data-stats] {
            margin-bottom: 1rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            justify-content: center;
        }
    }

    @media only screen and (max-width: 575px) {
        & [data-stats] {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`;