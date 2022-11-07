import styled from "styled-components";

export const StyledStatsTable = styled.table`
    color: white;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    thead {
        background-color: ${({ theme }) => theme.backgroundColors.tertiary};
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

    tbody:before {
        content:"";
        display:block;
    }

    tr[data-order="0"] > td {
        padding-top: 1rem;
    }
    tr[data-order]:last-child > td {
        padding-bottom: 1rem;
    }

    td {
        padding: .25rem;
        text-align: center;
    }
`;