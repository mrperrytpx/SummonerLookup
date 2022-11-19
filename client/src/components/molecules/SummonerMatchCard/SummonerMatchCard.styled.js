import { FlexRow, FlexRowSpaceAround, FlexRowSpaceBetween } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerMatchCard = styled.div`
    padding: .5rem;
    border: 1px solid ${({ theme, isWin }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
    border-radius: 8px;
    box-shadow: 0px 1px 1px ${({ theme, isWin }) => isWin ? theme.matchResult.win : theme.matchResult.loss};

    background-color: ${({ isWin, theme }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
    display: grid;
    grid-template-columns: 120px minmax(120px, 200px) 100px 1fr;
    grid-template-rows: 78px;
    gap: 0.5rem;

    & > :last-child {
        align-self: center;
        justify-self: center;
    }

    @media only screen and (max-width: 675px) {
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 20px 15px 38px;
        grid-template-areas: 
            "a a"
            "b c"
            "b d";

        & > div:nth-child(1) {
            grid-area: a;
            span:not(:first-child){
                display: none;
            }
        }

        & > div:nth-child(2) {
            grid-area: b;
            place-self: end start;
        }

        & > div:nth-child(3) {
            flex-direction: row;
            gap: 1.5rem;
            grid-area: c;
            place-self: end;
        }

        & > div:last-child {
            grid-area: d;
            place-self: end;
        }
    }

    @media only screen and (max-width: 450px) {
        grid-template-rows: 15px 15px 20px;

        & > :first-child {
            span {
                font-size: 0.9rem;
            }
        }

        & > :last-child {
            grid-template-columns: repeat(7, 20px);
            div {
                width: 100%;
                aspect-ratio: 1 / 1;
            }
        }

        & > :nth-child(2) > :first-child{
            width: 40px;
            aspect-ratio: 1 / 1;
        }


        div[data-setup]{
            width: 20px;
            aspect-ratio: 1 / 1;
        }

        div:has(div[data-setup]) {
            place-self: end start;
            grid-template-rows: repeat(2, minmax(20px, 1fr));
            grid-template-columns: repeat(2, minmax(20px, 1fr));
        }
    }

    
    @media only screen and (max-width: 350px) {
        & > :nth-child(3) span:last-child {
            display: none;
        }
    }
 `;