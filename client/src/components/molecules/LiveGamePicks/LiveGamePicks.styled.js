import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledLiveGamePicks = styled(FlexCol)`
    color: white;
    width: 100%;

    & > div {
        display: grid;
        grid-template-columns: 40px 100px 1fr;
        padding: .5rem;
        gap: 0.2rem;
        width: 100%;
        ${({ direction }) => direction && `direction: ${direction}`};


        & :last-child {
            justify-content: space-around;
        }
    }

    @media only screen and (max-width: 480px) {
        [data-mobile] {
            justify-content: flex-end;
            width: 48px;
        }

        div {
            grid-template-columns: 24px 100px 1fr;
        }

        div > div:last-child {
            gap: 0.1rem;
            justify-content: flex-end;
        }

        img {
            width: 24px;
            place-self: start center;
        }
    }

`;