import styled from "styled-components";

export const StyledSummonerChampionStats = styled.div`
    color: white;
    width: 100%;
    margin-bottom: 7rem;

    .border {
        margin-top: 1rem;
        border-radius: 1rem;
        overflow: hidden;
    }

    /*  u.gg credit */
    & > :first-child > div:Last-child {
        margin-right: 0.5rem;
    }
`;