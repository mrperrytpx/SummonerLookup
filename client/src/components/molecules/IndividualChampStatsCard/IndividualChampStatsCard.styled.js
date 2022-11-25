import styled from "styled-components";

export const StyledIndividualChampStatsCard = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 78px;
    padding: 0.5rem 0;
    width: 100%;
    
    border-top: 1px solid ${({ theme }) => theme.backgroundColors.tertiary};

    & > div:nth-child(2) {
        place-self: center;
    }

    img {
        width: 40px;
        aspect-ratio: 1 / 1;
    }

    @media only screen and (max-width: 1100px) {
        & > div:nth-child(2) {
            place-self: center end;
        }
    }

    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);

        & > div:nth-child(2) {
            place-self: center;
        }
    }

    @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr 2fr 2fr;

        & > :first-child  span {
            display: none;
        }

        & > div:nth-child(2) {
        place-self: center end;
    }
    }
`; 