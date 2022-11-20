import styled from "styled-components";
import { FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerCard = styled(FlexRow)`
    width: 100%;
    padding: 0.2rem;
    margin: 2rem 0;

    @media only screen and (max-width: 650px) {
        & {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }
`;