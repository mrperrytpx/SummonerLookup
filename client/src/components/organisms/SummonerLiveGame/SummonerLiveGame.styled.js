import styled from "styled-components";
import { FlexRowCenter } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerLiveGame = styled(FlexRowCenter)`
    margin: 2rem 0;
    width: 100%;
    gap: 1rem;
    border-radius: 15px;

    & > div {
        width: min(500px, 98%);
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 1rem;
    }

    @media only screen and (max-width: 775px) {
        flex-direction: column;
    }
`;