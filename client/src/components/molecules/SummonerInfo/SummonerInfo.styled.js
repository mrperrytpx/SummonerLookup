import styled from "styled-components";
import { FlexColSpaceBetween } from "../../atoms/FlexBoxes/FlexBoxes.styled";

export const StyledSummonerInfo = styled(FlexColSpaceBetween)`
    align-items: flex-start;
    padding: 0 1rem;
    flex: 1;
    gap: 0.5rem;

    span {
        width: auto;
    }

    @media only screen and (max-width: 650px) {
        span {
            text-align: center;
        }

        & {
            align-items: center;
            gap: 1rem;
        }

        & :first-child {
            flex-direction: column;
            gap: 0;

            & > div {
                flex-direction: column;
            }
        }
    }
`;