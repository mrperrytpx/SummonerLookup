import styled from "styled-components";

export const StyledStatsTable = styled.table`
    color: white;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    
    thead {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    /* champion icon */
    [data-icon="true"] {
        min-width: 40px;
    }

    th {
        font-size: 0.75rem;
        font-weight: 500;
        opacity: 0.8;
        text-transform: uppercase;
        user-select: none;
        cursor: pointer;

        /* champion header */
        &:nth-child(2) > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
        }

        /* sorted column header */
        &[data-sorted="asc"], &[data-sorted="desc"] {
            opacity: 1;
        }

        /* header border when sorted */
        &[data-sorted="asc"] > div {
            border-top: 3px solid ${({ theme }) => theme.backgroundColors.active};
            color: white
        }
        &[data-sorted="desc"] > div {
            border-bottom: 3px solid ${({ theme }) => theme.backgroundColors.active};
            color: white;
        }
    }
    
    th > div {
        padding: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 54px;
    }

    tbody {        
        background-color: ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 20px;
        border: 1px solid white;
        width: 100%;
    }

    /* all but the first row */
    tr:not(:first-child) {
        outline: thin solid ${({ theme }) => theme.backgroundColors.tertiary};
    }

    /*  all cells in the first row */
    tr:nth-child(1) > td {
        padding-top: 1rem;
    }

    /* all cells in the last row */
    tr:last-child > td {
        padding-bottom: 1rem;
    }

    td {
        padding: .5rem .25rem;
        text-align: center;
        font-weight: 500;
        font-size: .82rem;
    }

    /* sorted cells */
    td[data-sorted="asc"], td[data-sorted="desc"] {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    @media only screen and (max-width: 400px) {
        /* champion name */
        span[data-champ] {
            display: none;
            padding: 0;
        }
        
        /* champion icon */
        [data-icon="true"] {    
            min-width: 30px;
            width: 30px;
        }

        span {
            font-size: 0.65rem;
        }

        td {
            font-size: 0.65rem;

        }
    }
`;