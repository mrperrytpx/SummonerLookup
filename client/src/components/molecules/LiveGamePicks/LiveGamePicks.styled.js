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

        & > div {
        grid-template-columns: 30px 80px 1fr;

        }

        [data-mobile] {
            justify-content: flex-end;
        }

        a {
            font-size: 0.7rem;
        }

        & > div > div:first-child {
            width: 30px;
        }

        [data-rune] {
            width: 20px;
        }
    }

`;