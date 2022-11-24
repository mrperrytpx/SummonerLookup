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
    gap: 0.1rem;

    /* items */
    & > :last-child {
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
        & > div:nth-child(1) {
            grid-area: a;
            span:not(:first-child){
                display: none;
            }
        }

        /* champion and setup */
        & > div:nth-child(2) {
            grid-area: b;
            place-self: end start;
        }

        /* spans above items */
        & > div:nth-child(3) {
            flex-direction: row;
            gap: 1.5rem;
            grid-area: c;
            place-self: center end;
        }

        /* items */
        & > div:last-child {
            grid-area: d;
            place-self: end;
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
            div {
                width: 100%;
                aspect-ratio: 1 / 1;
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

    
    @media only screen and (max-width: 380px) {
        grid-template-rows: 1rem 20px 20px;

        /* items */
        & > :last-child {
            grid-template-columns: repeat(7, 20px);
            div {
                width: 100%;
                aspect-ratio: 1 / 1;
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
 `;