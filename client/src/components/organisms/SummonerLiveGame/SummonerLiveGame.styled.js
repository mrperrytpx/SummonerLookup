import styled from "styled-components";
import { FlexCol, FlexRow, FlexRowCenter, FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerLiveGame = styled(FlexRowCenter)`
    margin: 2rem 0;
    width: 100%;
    border-radius: 15px;
    gap: 1rem;

    & > div {
        width: min(450px, 95%);
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 1rem;
    }

    @media only screen and (max-width: 900px) {
        & {
            flex-direction: column;
        }
    }
`;