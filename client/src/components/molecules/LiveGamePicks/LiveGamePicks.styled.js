import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledLiveGamePicks = styled(FlexCol)`
    color: white;
    width: 100%;
    [data-is-player="true"] {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    & > div {
        display: grid;
        grid-template-columns: 40px minmax(100px, max-content) 1fr;
        padding: .5rem;
        gap: 0.2rem;
        width: 100%;

        & :last-child {
            justify-content: space-around;
        }
    }

    @media only screen and (max-width: 440px) {

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