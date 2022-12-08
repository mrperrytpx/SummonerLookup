import styled from "styled-components";
import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerLiveGame = styled(FlexCol)`
    width: min(1000px, 98%);
    border-radius: 20px;
    margin: 2rem auto;
    gap: .5rem;

    [data-team] {
        width: min(500px, 98%);
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 0 0 10px 10px;
    }

    @media only screen and (max-width: 775px) {
        [data-picks] {
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 440px) {
        
        [data-banned-champ] {
            width: 26px;
        }
    }
`;