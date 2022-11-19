import styled from "styled-components";

export const StyledIndividualChampStatsCard = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    
    padding: 0.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.tertiary};
    width: 100%;

    img {
        width: 40px;
        aspect-ratio: 1 / 1;
    }

    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);

    }

    @media only screen and (max-width: 420px) {
        & > :first-child  span {
            display: none;
        }
    }
`; 