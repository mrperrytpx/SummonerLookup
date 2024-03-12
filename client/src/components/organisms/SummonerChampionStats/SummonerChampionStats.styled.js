import styled from "styled-components";

export const StyledSummonerChampionStats = styled.div`
    color: white;
    width: 100%;
    margin-bottom: 3rem;

    .border {
        margin-top: 1rem;
        border-radius: 1rem;
        overflow: hidden;
    }

    /*  u.gg credit */
    & > :first-child > div:last-child {
        margin-right: 0.5rem;
    }
`;
