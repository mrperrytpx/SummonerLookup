import styled from "styled-components";

export const StyledStatsTable = styled.table`
    color: white;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    
    thead {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    th {
        font-size: 0.75rem;
        font-weight: 500;
        opacity: 0.8;
        text-transform: uppercase;
        user-select: none;
        cursor: pointer;

        &:nth-child(2) > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
        }

        &[data-sorted="asc"], &[data-sorted="desc"] {
            opacity: 1;
        }

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

    tr:not(:first-child) {
        outline: thin solid ${({ theme }) => theme.backgroundColors.tertiary};
    }

    tr:nth-child(1) > td {
        padding-top: 1rem;
    }

    tr:last-child > td {
        padding-bottom: 1rem;
    }

    td {
        padding: .5rem 0;
        text-align: center;
        font-weight: 500;
        font-size: .82rem;
    }

    td[data-sorted="asc"], td[data-sorted="desc"] {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
    }

    @media only screen and (max-width: 400px) {
        span[data-champ] {
            display: none;
            padding: 0;
        }
    }
`;