import styled from "styled-components";

export const StyledStatsTable = styled.table`
    color: white;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    
    thead {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
        border: thin solid white;
    }

    th {
        font-size: 0.75rem;
        font-weight: 500;
        opacity: 0.65;
        text-transform: uppercase;
        user-select: none;
        cursor: pointer;

        &:nth-child(2) > div {
            width: 100%;
            display: inline-block;
            text-align: left;
        }
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
        padding: .5rem .25rem;
        text-align: center;
        font-weight: 500;
    }
`;