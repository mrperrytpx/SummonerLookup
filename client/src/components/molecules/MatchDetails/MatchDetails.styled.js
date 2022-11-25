import styled from "styled-components";

export const StyledMatchDetails = styled.table`
    color: white;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    thead {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    /* champion icon */
    [data-icon] {
        min-width: 40px;
    }

    /* row which highlights the profile's champion in a given game  */
    [data-profile="true"] {
        background-color: ${({ theme, isWinner }) => isWinner ? theme.matchResult.winBorder : theme.matchResult.lossBorder};
    }

    th {
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        user-select: none;

        /* champion header */
        &:nth-child(2) > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    /* first header */
    th:first-child, th:first-child > div {
        width: 190px;
    }

    /* last header */
    th:last-child, th:last-child > div {
        width: 180px;
    }
    
    th > div {
        padding: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    tbody {        
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 20px;
        border: 1px solid white;
        width: 100%;
    }

    tr {
        outline: thin solid ${({ theme }) => theme.backgroundColors.tertiary};
        background-color: ${({ theme, isWinner }) => isWinner ? theme.matchResult.win : theme.matchResult.loss};
    }


    td {
        padding: .1rem .05rem;
        text-align: center;
        font-weight: 500;
        font-size: .82rem;
    }

    @media only screen and (max-width: 600px) {
        span {
            font-size: 0.65rem;
        }

        td {
            font-size: 0.65rem;

        }
    }

    @media only screen and (max-width: 575px) {
        /*  first header */
        th:first-child, th:first-child > div {
            width: 150px;
        }
    }

    @media only screen and (max-width: 500px) {
        /* last header */
        th:last-child, th:last-child > div {
            width: 100px;
        }
        
        [data-itemgrid] {
            grid-template-columns: repeat(4, 25px);
            grid-template-rows: repeat(2, 25px);
            place-content: center;

            div:nth-child(7) {
                grid-column: 5 / 4;
                grid-row: 1 / 2;
            }
        }

        [data-item] {
            width: 25px;
        }
    }

    @media only screen and (max-width: 615px) {
        /* first header */
        th:first-child, th:first-child > div {
            width: 80px;
        }

        [data-champ] {
            gap: 0.1rem;
            flex-direction: column;
            a {
                text-align: left;
            }
        }

        /* grid with champion icon, runes and summoner spells */
        [data-data-champsetup] {
            place-self: start;
            padding-left: 0.25rem;
        }
    }

    @media only screen and (max-width: 320px) {
        /* champion icon */
        [data-icon] {
            min-width: 30px;
            width: 30px;
        }

        /* champion setup */
        [data-setup] {
            min-width: 15px;
            width: 15px;
        }

        [data-champsetup] {
            place-self: start;
        }

        /* only summoner spells and runes grid */
        [data-setupgrid] {
            grid-template-columns: repeat(2, 15px);
            grid-template-rows: repeat(2, 15px);
        }

        /*  items grid */
        [data-itemgrid] {
            grid-template-columns: repeat(4, 20px);
            grid-template-rows: repeat(2, 20px);
            place-content: center;

            /* 7th item in grid */
            div:nth-child(7) {
                grid-column: 5 / 4;
                grid-row: 1 / 2;
            }
        }

        [data-item] {
            width: 20px;
        }
    }
`;