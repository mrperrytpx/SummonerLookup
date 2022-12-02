import { FlexCol } from "components/atoms/FlexBoxes/FlexBoxes.styled";
import styled from "styled-components";

export const StyledSummonerMatchCard = styled(FlexCol)`
    /* match card */
    & > div:first-child {
        border: 1px solid ${({ theme, isWin }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
        border-radius: 8px;

        box-shadow: 0px 1px 1px ${({ theme, isWin }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
        background-color: ${({ isWin, theme }) => isWin ? theme.matchResult.win : theme.matchResult.loss};
        display: grid;
        grid-template-columns: 120px minmax(120px, 200px) 100px 1fr;
        grid-template-rows: 78px;
        gap: 0.1rem;
        margin-bottom: 0.25rem;
        padding: .5rem;

        ${({ isVisible }) => !isVisible && `
            visibility: hidden;
        `};
        cursor: pointer;

        /* items */
        & > :last-child {
            gap: 0.1rem;
            border: 1px solid black;
            background-color: black;
            align-self: center;
            justify-self: center;
        }

        @media only screen and (max-width: 700px) {
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 1rem 20px 40px;
            grid-template-areas: 
                "a a"
                "b c"
                "b d";

            /* queue type */
            & > :nth-child(1) {
                grid-area: a;
                span:not(:first-child){
                    display: none;
                }
            }

            /* champion and setup */
            & > :nth-child(2) {
                grid-area: b;
                place-self: end start;
            }

            /* spans above items */
            & > :nth-child(3) {
                flex-direction: row;
                gap: 1.5rem;
                grid-area: c;
                place-self: center end;
            }

            /* items */
            & > :last-child {
                grid-area: d;
                place-self: end;
            }

            [data-champsetup] {
                background-color: black;
            }
        }

        @media only screen and (max-width: 450px) {
            grid-template-rows: 1rem 25px 25px;

            /* queue type */
            & > :first-child {
                span {
                    font-size: 0.9rem;
                }
            }

            /* items */
            & > :last-child {
                grid-template-columns: repeat(7, 25px);
                [data-item] {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                }
                [data-empty] {
                    width: 100%;
                    place-self: center;
                }
            }

            /*  champion icon */
            & > :nth-child(2) > :first-child{
                width: 50px;
                aspect-ratio: 1 / 1;
            }

            /* rune/summoner spell icon (setup) */
            div[data-setup]{
                width: 25px;
                aspect-ratio: 1 / 1;
            }

            /*  grid for champion and setup */
            div:has(div[data-setup]) {
                place-self: end start;
                grid-template-rows: repeat(2, minmax(25px, 1fr));
                grid-template-columns: repeat(2, minmax(25px, 1fr));
            }
        }

        
        @media only screen and (max-width: 400px) {
            grid-template-rows: 1rem 20px 20px;

            /* items */
            & > :last-child {
                grid-template-columns: repeat(7, 20px);
                [data-item] {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                }
                [data-empty] {
                    width: calc(100% - 1px);
                }
            }

            /* spans above items */
            & > :nth-child(3) span {
                font-size: 0.65rem;
                &:last-child {
                    display: none;
                }
            }

            /* queue type */
            & > :nth-child(1) span {
                font-size: 0.75rem;
            }

            /*  champion icon */
            & > :nth-child(2) > :first-child{
                width: 40px;
                aspect-ratio: 1 / 1;
            }

            /* rune/summoner spell icon (setup) */
            div[data-setup]{
                width: 20px;
                aspect-ratio: 1 / 1;
            }

            /*  grid for champion and setup */
            div:has(div[data-setup]) {
                place-self: end start;
                grid-template-rows: repeat(2, minmax(20px, 1fr));
                grid-template-columns: repeat(2, minmax(20px, 1fr));
            }
        }

        @media only screen and (max-width: 310px) {
            & > :nth-child(3) {
                grid-area: a;
                gap: 0.2rem;
            } 

            & > :last-child {
                grid-area: d;
                grid-column: 3 / 2;
                grid-row: 3;
                place-self: end;
            }

            [data-itemgrid] {
                background-color: #00000000;
                border: none;
                grid-template-columns: repeat(4, 18px);
                place-content: center;

                div:nth-child(7) {
                    grid-column: 5 / 4;
                    grid-row: 1 / 2;
                }
            }

            [data-item] {
                outline: 1px solid black;
            }
        }
    }
 `;