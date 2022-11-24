import styled from "styled-components";

export const StyledMatchDetails = styled.table`
    color: white;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    thead {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    [data-icon] {
        min-width: 40px;
    }

    [data-profile="true"] {
        outline: thin solid ${({ theme }) => theme.backgroundColors.active};
        background-color: ${({ theme }) => theme.backgroundColors.quaternary};
    }

    th {
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        user-select: none;

        &:nth-child(2) > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    th:first-child, th:first-child > div {
        width: 190px;
    }

    th:last-child, th:last-child > div {
        width: 180px;
    }
    
    th > div {
        padding: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    th > div >:first-child {
        border: 1px solid white;
    }

    tbody {        
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 20px;
        border: 1px solid white;
        width: 100%;
    }

    tr {
        outline: thin solid ${({ theme }) => theme.backgroundColors.tertiary};
        background-color: ${({ theme, isWinner }) => isWinner ? theme.matchResult.win : theme.matchResult.loss}
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
        th:first-child, th:first-child > div {
            width: 150px;
        }
    }

    @media only screen and (max-width: 500px) {
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

        [data-data-champsetup] {
            place-self: start;
            padding-left: 0.25rem;
        }
    }

    @media only screen and (max-width: 320px) {
        [data-icon] {
            min-width: 30px;
            width: 30px;
        }

        [data-setup] {
            min-width: 15px;
            width: 15px;
        }

        [data-data-champsetup] {
            place-self: start;
        }

        [data-setupgrid] {
            grid-template-columns: repeat(2, 15px);
            grid-template-rows: repeat(2, 15px);
        }

        [data-itemgrid] {
            grid-template-columns: repeat(4, 20px);
            grid-template-rows: repeat(2, 20px);
            place-content: center;

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