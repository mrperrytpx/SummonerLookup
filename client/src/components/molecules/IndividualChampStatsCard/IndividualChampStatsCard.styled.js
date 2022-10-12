import styled from "styled-components";

export const StyledIndividualChampStatsCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    padding: 0.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.tertiary};
    width: 100%;

    &:first-of-type{
        border-top: none;
    }

    img {
        width: 40px;
        aspect-ratio: 1 / 1;
    }
`; 