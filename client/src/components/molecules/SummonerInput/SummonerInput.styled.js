import styled from "styled-components";
import { FlexRow } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerInput = styled(FlexRow)`
    width: 100%;
    background-color: #eeeeee;

    @media only screen and (max-width: 380px) {
        a {
            min-width: 30px;

            svg {
                width: 20px;
                aspect-ratio: 1 / 1;
            }
        }

        input {
            font-size: 1rem;
        }
    }
`;
